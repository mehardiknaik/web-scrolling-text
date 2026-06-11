import type { Animation, AnimationContext, AnimationTarget, AnimationMotionContext } from './types';

/**
 * Procedurally checks if a latitude/longitude point falls on a major landmass.
 * Approximates Americas, Eurasia/Africa, Australia, and Antarctica.
 */
const isLand = (lat: number, lon: number): boolean => {
    // Normalize longitude to [-PI, PI]
    let l = lon;
    while (l > Math.PI) l -= Math.PI * 2;
    while (l < -Math.PI) l += Math.PI * 2;

    // Americas (approx lon -140 deg to -35 deg, lat -55 deg to 75 deg)
    const inAmericasLon = l > -2.44 && l < -0.61;
    const inAmericasLat = lat > -0.96 && lat < 1.31;
    const americasShape = inAmericasLon && inAmericasLat && (Math.sin(lat * 1.5) + Math.cos(l * 2.2) > -0.7);

    // Eurasia / Africa (approx lon -17 deg to 180 deg, lat -35 deg to 75 deg)
    const inEurasiaLon = l > -0.3 && l < 3.14;
    const inEurasiaLat = lat > -0.6 && lat < 1.31;
    // African continent shape tweak
    const isAfrica = l > -0.3 && l < 0.9 && lat > -0.6 && lat < 0.6;
    const eurasiaShape = inEurasiaLon && inEurasiaLat && (isAfrica || (Math.cos(lat + 0.1) + Math.sin(l * 1.4) > -0.9));

    // Australia (approx lon 113 deg to 153 deg, lat -39 deg to -10 deg)
    const inAustraliaLon = l > 1.97 && l < 2.67;
    const inAustraliaLat = lat > -0.68 && lat < -0.17;
    const australiaShape = inAustraliaLon && inAustraliaLat;

    // Antarctica (south pole)
    const antarctica = lat < -1.15;

    // Extra organic islands / noise
    const noise = Math.sin(lat * 6) * Math.cos(l * 6) > 0.85;

    return americasShape || eurasiaShape || australiaShape || antarctica || noise;
};

/**
 * Animation 9: Rotating Holographic Earth
 * Distributes particles on a 3D sphere using the Fibonacci spiral.
 * Reuses back hemisphere particles by projecting them to the front (doubling density).
 */
const animation9: Animation = {
    name: 'Rotating 3D Earth',

    calculateTarget: (context: AnimationContext): AnimationTarget => {
        const { canvasWidth, canvasHeight, index, totalParticles } = context;

        // Fibonacci sphere distribution (Golden Spiral)
        const progress = index / totalParticles;
        const lat = Math.asin(2 * progress - 1); // Latitude (-PI/2 to PI/2)
        const goldenRatio = (1 + Math.sqrt(5)) / 2;
        const lon = index * 2 * Math.PI * goldenRatio; // Longitude (0 to 2PI)

        const isLandmass = isLand(lat, lon);
        
        // Land: Green (135), Ocean: Blue (215)
        const hue = isLandmass ? 135 : 215;
        const size = isLandmass ? 2.2 : 1.1;
        const opacity = isLandmass ? 0.75 : 0.22;

        return { angle: lat, distance: lon, hue, size, opacity };
    },

    applyMotion: (context: AnimationMotionContext): void => {
        const { particle, target, canvasWidth, canvasHeight, centerX, centerY } = context;
        const time = Date.now() * 0.001;

        // Retrieve spherical coordinates
        const lat = target.angle;
        const lon = target.distance;

        // Rotation speed (about Y axis)
        const rotationAngle = time * 0.18;
        const currentLon = lon + rotationAngle;

        // Globe radius based on screen size
        const R = Math.min(canvasWidth, canvasHeight) * 0.32;

        // Check if the coordinate is originally on the back side of the sphere.
        // We project the 3D position before mirroring to see if Z is pointing away.
        const yBase = R * Math.sin(lat);
        const zBase = R * Math.cos(lat) * Math.sin(currentLon);
        const tilt = 23.4 * Math.PI / 180;
        const zRotInitial = yBase * Math.sin(tilt) + zBase * Math.cos(tilt);

        // If it is on the back (zRotInitial > 0), mirror it to the front by shifting longitude by PI.
        // This doubles the visual density of particles on the front of the globe.
        const isBack = zRotInitial > 0;
        const effectiveLon = isBack ? currentLon + Math.PI : currentLon;

        // Now calculate land/ocean state based on the actual Earth surface currently visible at this spot
        const landLon = effectiveLon - rotationAngle;
        const isLandmass = isLand(lat, landLon);

        // Calculate final 3D coordinates using the front-projected longitude
        const x = R * Math.cos(lat) * Math.cos(effectiveLon);
        const y = R * Math.sin(lat);
        const z = R * Math.cos(lat) * Math.sin(effectiveLon);

        // Apply axial tilt
        const xRot = x;
        const yRot = y * Math.cos(tilt) - z * Math.sin(tilt);
        const zRot = y * Math.sin(tilt) + z * Math.cos(tilt); // zRot is now guaranteed to be <= 0

        // 3D Perspective Projection
        const viewDistance = 500;
        const fov = 400;
        const scale = fov / (viewDistance + zRot);

        // Map to 2D Screen coordinates
        const screenX = centerX + xRot * scale;
        const screenY = centerY + yRot * scale;

        // Teleport particle instantly if it wrapped/teleported across the sphere edge
        const travelDist = Math.sqrt(Math.pow(screenX - particle.x, 2) + Math.pow(screenY - particle.y, 2));
        if (travelDist > R * 0.75) {
            particle.x = screenX;
            particle.y = screenY;
            particle.vx = 0;
            particle.vy = 0;
        }

        // Pull particles to their screen positions
        const pullStrength = 0.08;
        particle.vx += (screenX - particle.x) * pullStrength;
        particle.vy += (screenY - particle.y) * pullStrength;

        // Apply depth cueing (dim and shrink particles towards the edges of the disk)
        const normalizedDepth = -zRot / R; // 1 at center/closest, 0 at the edges
        const depthAlpha = Math.max(0.12, Math.min(1.0, normalizedDepth * 1.3));

        target.opacity = (isLandmass ? 0.85 : 0.22) * depthAlpha;
        target.size = (isLandmass ? 2.4 : 1.1) * scale * Math.max(0.5, normalizedDepth);

        // Colors: Shimmer land green and ocean blue gently
        if (isLandmass) {
            target.hue = (135 + Math.sin(time * 0.5) * 8 + 360) % 360;
        } else {
            target.hue = (215 + Math.cos(time * 0.5) * 8 + 360) % 360;
        }

        // Update polar angle representation
        const dx = particle.x - centerX;
        const dy = particle.y - centerY;
        particle.angle = Math.atan2(dy, dx);
    },
};

export default animation9;
