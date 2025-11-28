import type { Animation, AnimationContext, AnimationTarget, AnimationMotionContext } from './types';

/**
 * Animation 8: Zigzag Torus
 * 3D torus (donut) with dots wrapped in a zigzag pattern
 */
const animation8: Animation = {
    name: 'Zigzag Torus',

    calculateTarget: (context: AnimationContext): AnimationTarget => {
        const { index, totalParticles } = context;

        // Configuration
        const majorRadius = 350; // Increased from 200
        const minorRadius = 60;  // Radius of the tube (r)
        const zigzagFrequency = 12; // Zigzags around the tube
        const zigzagAmplitude = 0.5; // Amplitude in radians (affects position on tube)

        // Distribute particles
        const strands = 20; // Number of parallel zigzag lines
        const particlesPerStrand = Math.floor(totalParticles / strands);
        const strandIndex = Math.floor(index / particlesPerStrand);
        const particleInStrand = index % particlesPerStrand;

        // Calculate position around the main ring (Phi)
        // Map 0..1 to 0..2PI
        const progress = particleInStrand / particlesPerStrand;
        const phiBase = progress * Math.PI * 2;

        // Calculate angle around the tube (Theta)
        // Base angle for the strand + twist
        const strandOffset = (strandIndex / strands) * Math.PI * 2;
        const spiralTwist = progress * Math.PI * 8; // Twist around the tube
        const theta = strandOffset + spiralTwist;

        // Apply zigzag offset to Phi (position along the main ring)
        // We oscillate the position on the ring based on the tube angle
        const zigzagOffset = Math.sin(theta * zigzagFrequency) * (zigzagAmplitude / (majorRadius / 20));
        // Note: scaling amplitude to be reasonable relative to ring size

        // Actually, let's apply zigzag to the tube angle (Theta) based on ring position (Phi)
        // This makes the lines wiggle on the surface
        // Let's stick to the plan: zigzag wraps around.

        // Let's try: The strand is defined by Theta. 
        // We want the line to wave back and forth in Phi as it goes around Theta? 
        // Or wave in Theta as it goes around Phi?
        // "dots are wrap around that like in zigzag pattern"
        // Usually means the line goes around the tube (Theta changes) and advances along the ring (Phi changes).
        // A straight line would be Phi = k * Theta.
        // A zigzag would be Phi = k * Theta + Sin(Theta).

        const phi = phiBase + Math.sin(theta * 3) * 0.1; // Simple wave

        // Store Toroidal coordinates
        // angle -> theta (tube angle)
        // distance -> phi (ring angle)
        // size -> minorRadius
        return {
            angle: theta,
            distance: phi, // Storing phi in 'distance' property
            size: minorRadius,
            hue: (index % 360),
            opacity: progress
        };
    },

    applyMotion: (context: AnimationMotionContext): void => {
        const { particle, target, centerX, centerY } = context;
        const time = Date.now() * 0.001;

        // 3D Projection Parameters
        const fov = 300;
        const viewDistance = 500;

        // Rotation speeds - STOPPED tumbling
        const rotX = 0.5; // Fixed tilt to see the donut shape
        const rotY = 0;

        // Retrieve Toroidal coordinates
        const theta = target.angle; // Angle around tube
        const phi = target.distance; // Angle around main ring
        const r = target.size; // Minor radius
        const R = 350; // Major radius

        // Animate: Spin the torus around its main axis (Phi)
        const currentPhi = phi + time * 0.2;

        // Animate: Spin the texture around the tube (Theta)
        const currentTheta = theta + time * 0.5;

        // Torus Parametric Equations
        // Orient so the ring is in XY plane (Front facing)
        // Z is depth

        const tubeRadius = r;
        const ringRadius = R;

        const cosTheta = Math.cos(currentTheta);
        const sinTheta = Math.sin(currentTheta);
        const cosPhi = Math.cos(currentPhi);
        const sinPhi = Math.sin(currentPhi);

        // Standard torus formula, but oriented for XY plane view
        // The main ring follows cosPhi/sinPhi in X/Y
        // The tube thickness is added to that

        // X and Y are the main ring position + tube offset
        // We want the tube circle to be perpendicular to the ring tangent.
        // For a ring in XY plane:
        // x = (R + r * cos(theta)) * cos(phi)
        // y = (R + r * cos(theta)) * sin(phi)
        // z = r * sin(theta)

        let x = (ringRadius + tubeRadius * cosTheta) * cosPhi;
        let y = (ringRadius + tubeRadius * cosTheta) * sinPhi;
        let z = tubeRadius * sinTheta;

        // No 3D rotation (front facing)

        // Project to 2D
        // Use a weak perspective or orthographic to keep it looking "2D" but still show depth of the tube
        const scale = fov / (viewDistance + z);
        const screenX = centerX + x * scale;
        const screenY = centerY + y * scale;

        // Update particle
        particle.vx += (screenX - particle.x) * 0.1;
        particle.vy += (screenY - particle.y) * 0.1;

        // Visuals based on depth
        // Clamp max size to prevent huge dots
        target.size = Math.min(15, Math.max(0.5, 3 * scale));

        // Opacity
        // Simple depth cue
        const depthAlpha = Math.max(0.2, Math.min(1, (tubeRadius - z) / (2 * tubeRadius) + 0.5));
        target.opacity = depthAlpha;

        // Color cycling
        target.hue = (target.hue + time * 50) % 360;
    },
};

export default animation8;
