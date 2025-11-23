import type { Animation, AnimationContext, AnimationTarget, AnimationMotionContext } from './types';

/**
 * Animation 6: Orbiting Rings
 * Multiple rings (circles of dots) that orbit around the center.
 * Refined for visibility: More rings, spaced out dots.
 */
const animation6: Animation = {
    name: 'Orbiting Rings',

    calculateTarget: (context: AnimationContext): AnimationTarget => {
        const { canvasWidth, canvasHeight, index, totalParticles } = context;

        // Increase number of rings
        const numRings = 8;
        const particlesPerRing = Math.floor(totalParticles / numRings);
        const ringIndex = Math.floor(index / particlesPerRing);
        const safeRingIndex = Math.min(ringIndex, numRings - 1);

        // Ring properties
        const minOrbit = Math.min(canvasWidth, canvasHeight) * 0.15;
        const maxOrbit = Math.min(canvasWidth, canvasHeight) * 0.45;
        const orbitStep = (maxOrbit - minOrbit) / (numRings - 1);

        // Distribute orbit radii
        const orbitRadius = minOrbit + safeRingIndex * orbitStep;

        // Ring size (radius of the circle of dots)
        // Make them slightly larger so dots have space
        const ringRadius = 40 + safeRingIndex * 5;

        // Particle position on the ring
        const particleInRingIndex = index % particlesPerRing;

        // To add space between dots, we can use only a subset of the circle
        // or just ensure they are evenly distributed.
        // With more rings, particlesPerRing is smaller, so they naturally space out more.
        const angleOnRing = (particleInRingIndex / particlesPerRing) * Math.PI * 2;

        // Colors
        // Cycle through a nice palette
        const ringHues = [180, 200, 220, 240, 260, 280, 300, 320];
        const hue = ringHues[safeRingIndex % ringHues.length];

        const opacity = 0.8; // Higher opacity for visibility
        const size = 2.5; // Slightly larger dots

        return { angle: angleOnRing, distance: orbitRadius, hue, size, opacity };
    },

    applyMotion: (context: AnimationMotionContext): void => {
        const { particle, target, centerX, centerY, index, totalParticles } = context;
        const time = Date.now() * 0.001;

        const numRings = 8;
        const particlesPerRing = Math.floor(totalParticles / numRings);
        const ringIndex = Math.floor(index / particlesPerRing);
        const safeRingIndex = Math.min(ringIndex, numRings - 1);

        // 1. Calculate the center of the ring
        // Orbit speed depends on ring index
        const orbitSpeed = 0.2 / (1 + safeRingIndex * 0.2);
        const initialOrbitAngle = (safeRingIndex / numRings) * Math.PI * 2;
        // Add some offset so they aren't all aligned
        const currentOrbitAngle = initialOrbitAngle + time * orbitSpeed;

        const orbitRadius = target.distance;
        const ringCenterX = centerX + Math.cos(currentOrbitAngle) * orbitRadius;
        const ringCenterY = centerY + Math.sin(currentOrbitAngle) * orbitRadius;

        // 2. Calculate particle position on the ring
        const ringRadius = 40 + safeRingIndex * 5;

        // Ring rotation
        const ringRotationSpeed = 0.5;
        const currentAngleOnRing = target.angle + time * ringRotationSpeed;

        const targetX = ringCenterX + Math.cos(currentAngleOnRing) * ringRadius;
        const targetY = ringCenterY + Math.sin(currentAngleOnRing) * ringRadius;

        // Smooth movement
        const pullStrength = 0.08;
        particle.vx += (targetX - particle.x) * pullStrength;
        particle.vy += (targetY - particle.y) * pullStrength;
    },
};

export default animation6;
