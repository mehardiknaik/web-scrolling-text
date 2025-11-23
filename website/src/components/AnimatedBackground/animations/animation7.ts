import type { Animation, AnimationContext, AnimationTarget, AnimationMotionContext } from './types';

/**
 * Animation 7: Cascading Streams
 * Particles flow in vertical streams from top to bottom with wave-like horizontal motion
 */
const animation7: Animation = {
    name: 'Cascading Streams',

    calculateTarget: (context: AnimationContext): AnimationTarget => {
        const { canvasWidth, canvasHeight, index, totalParticles } = context;

        // Create vertical streams across the width
        const streamCount = 15; // Number of vertical streams
        const particlesPerStream = Math.floor(totalParticles / streamCount);
        const streamIndex = index % streamCount;
        const positionInStream = Math.floor(index / streamCount);

        // Horizontal position - evenly spaced streams
        const streamX = (streamIndex / streamCount) * canvasWidth;

        // Vertical position - staggered down the stream
        const normalizedY = (positionInStream / particlesPerStream);
        const streamY = normalizedY * canvasHeight * 1.5; // Extend beyond canvas for continuous flow

        // Convert to polar coordinates from center for the animation system
        const centerX = canvasWidth / 2;
        const centerY = canvasHeight / 2;
        const dx = streamX - centerX;
        const dy = streamY - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);

        // Color gradient - cool blues and cyans flowing to purples
        const hue = 180 + (streamIndex * 12) + (normalizedY * 60); // Blue to purple gradient

        // Size varies by stream and position
        const size = 1.8 + (streamIndex % 5) * 0.4 + Math.sin(normalizedY * Math.PI) * 0.6;

        // Opacity - fade in at top, fade out at bottom
        const opacity = 0.5 * Math.sin(normalizedY * Math.PI) + 0.2;

        return { angle, distance, hue, size, opacity };
    },

    applyMotion: (context: AnimationMotionContext): void => {
        const { particle, canvasWidth, canvasHeight, centerX, centerY, particleIndex, totalParticles } = context;
        const time = Date.now() * 0.001;

        // Calculate stream info
        const streamCount = 15;
        const particlesPerStream = Math.floor(totalParticles / streamCount);
        const streamIndex = particleIndex % streamCount;
        const positionInStream = Math.floor(particleIndex / streamCount);
        const normalizedY = (positionInStream / particlesPerStream);

        // Base horizontal position for this stream
        const baseX = (streamIndex / streamCount) * canvasWidth;

        // Flowing downward motion - constant downward velocity
        const flowSpeed = 0.8 + (streamIndex % 5) * 0.2;
        particle.vy += flowSpeed;

        // Horizontal wave motion - creates the cascading effect
        const waveFrequency = 0.6 + (streamIndex % 7) * 0.15;
        const waveAmplitude = 40 + (streamIndex % 4) * 15;
        const wavePhase = time * waveFrequency + streamIndex * 0.5;
        const horizontalWave = Math.sin(wavePhase + normalizedY * Math.PI * 3) * waveAmplitude;

        // Secondary wave for more complex motion
        const secondaryWave = Math.cos(time * 0.8 + streamIndex * 0.3 + normalizedY * Math.PI * 2) * 20;

        // Target X position with waves
        const targetX = baseX + horizontalWave + secondaryWave;

        // Calculate current Y position in the flow
        const flowY = (normalizedY * canvasHeight * 1.5) + (time * 50 * flowSpeed);

        // Wrap around when particles flow off the bottom
        const wrappedY = flowY % (canvasHeight * 1.5);
        const targetY = wrappedY - canvasHeight * 0.25; // Start above canvas

        // Pull particles toward their stream position
        const pullStrength = 0.02;
        particle.vx += (targetX - particle.x) * pullStrength;
        particle.vy += (targetY - particle.y) * 0.008; // Gentler vertical pull

        // Add turbulence for organic flow
        const turbulenceX = Math.sin(time * 2 + particleIndex * 0.2) * 0.4;
        const turbulenceY = Math.cos(time * 1.5 + particleIndex * 0.15) * 0.2;
        particle.vx += turbulenceX;
        particle.vy += turbulenceY;

        // Slight drift between streams
        const driftSpeed = Math.sin(time * 0.3 + streamIndex) * 0.15;
        particle.vx += driftSpeed;

        // Update angle for the particle system (convert back to polar)
        const dx = particle.x - centerX;
        const dy = particle.y - centerY;
        particle.angle = Math.atan2(dy, dx);
    },
};

export default animation7;
