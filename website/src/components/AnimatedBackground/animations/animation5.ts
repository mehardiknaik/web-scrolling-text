import type { Animation, AnimationContext, AnimationTarget, AnimationMotionContext } from './types';

/**
 * Animation 5: DNA Helix
 * Double helix pattern with intertwining strands and flowing motion
 */
const animation5: Animation = {
    name: 'DNA Helix',

    calculateTarget: (context: AnimationContext): AnimationTarget => {
        const { canvasWidth, canvasHeight, index, totalParticles } = context;

        // Create two intertwining helical strands
        const strandCount = 2;
        const strandIndex = index % strandCount;
        const particlesPerStrand = Math.floor(totalParticles / strandCount);
        const positionInStrand = (index % particlesPerStrand) / particlesPerStrand;

        // Vertical position along the helix
        const verticalSpan = canvasHeight * 0.6;
        const verticalOffset = -verticalSpan / 2;
        const yPosition = verticalOffset + (positionInStrand * verticalSpan);

        // Helical rotation - opposite directions for each strand
        const helixRotations = 3; // Number of full rotations
        const baseAngle = positionInStrand * Math.PI * 2 * helixRotations;
        const angle = strandIndex === 0 ? baseAngle : baseAngle + Math.PI;

        // Radius of the helix
        const helixRadius = Math.min(canvasWidth, canvasHeight) * 0.12;

        // Calculate distance from center (using Pythagorean theorem)
        const horizontalDist = helixRadius * Math.cos(angle);
        const distance = Math.sqrt(horizontalDist * horizontalDist + yPosition * yPosition);

        // Color gradient along the helix - cyan to magenta
        const hue = strandIndex === 0
            ? 180 + (positionInStrand * 60)  // Cyan to blue
            : 280 + (positionInStrand * 60); // Magenta to purple

        // Size variation for depth perception
        const depthFactor = (Math.sin(angle) + 1) / 2; // 0 to 1
        const size = 1.2 + depthFactor * 1.5;

        // Opacity based on depth (particles in front are more opaque)
        const opacity = 0.25 + depthFactor * 0.4;

        return { angle, distance, hue, size, opacity };
    },

    applyMotion: (context: AnimationMotionContext): void => {
        const { particle, target, centerX, centerY, particleIndex } = context;
        const time = Date.now() * 0.001;

        // Continuous rotation of the helix
        const rotationSpeed = 0.01;
        particle.angle += rotationSpeed;

        // Calculate helix position
        const helixRadius = Math.min(context.canvasWidth, context.canvasHeight) * 0.12;
        const verticalSpan = context.canvasHeight * 0.6;
        const verticalOffset = -verticalSpan / 2;

        // Determine position in strand
        const strandCount = 2;
        const particlesPerStrand = Math.floor(context.totalParticles / strandCount);
        const positionInStrand = (particleIndex % particlesPerStrand) / particlesPerStrand;
        const yPosition = verticalOffset + (positionInStrand * verticalSpan);

        // Add flowing wave motion along the helix
        const waveAmplitude = 8;
        const waveFrequency = 2;
        const wave = Math.sin(time * 0.8 + positionInStrand * Math.PI * waveFrequency) * waveAmplitude;

        // Calculate target position with wave
        const dynamicRadius = helixRadius + wave;
        const helixX = centerX + Math.cos(particle.angle) * dynamicRadius;
        const helixY = centerY + yPosition + Math.sin(time * 0.5 + positionInStrand * Math.PI * 4) * 5;

        // Smooth interpolation to target position
        const pullStrength = 0.008;
        particle.vx += (helixX - particle.x) * pullStrength;
        particle.vy += (helixY - particle.y) * pullStrength;

        // Add subtle pulsing effect
        const pulse = Math.sin(time * 1.2 + particle.angle * 2) * 0.3;
        particle.vx += Math.cos(particle.angle) * pulse;
        particle.vy += Math.sin(particle.angle) * pulse;
    },
};

export default animation5;
