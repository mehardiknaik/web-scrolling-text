import type { Animation, AnimationContext, AnimationTarget, AnimationMotionContext } from './types';

/**
 * Animation 1: Particle Burst
 * Dynamic radial waves with pulsating motion
 */
const animation1: Animation = {
    name: 'Particle Burst',

    calculateTarget: (context: AnimationContext): AnimationTarget => {
        const { canvasWidth, canvasHeight, centerX, centerY, index, totalParticles } = context;

        const ringCount = 8;
        const particlesPerRing = Math.floor(totalParticles / ringCount);
        const ringIndex = Math.floor(index / particlesPerRing);
        const angleInRing = ((index % particlesPerRing) / particlesPerRing) * Math.PI * 2;

        // Create expanding rings with varying speeds
        const baseDistance = Math.min(canvasWidth, canvasHeight) * 0.05;
        const ringSpacing = Math.min(canvasWidth, canvasHeight) * 0.06;
        const distance = baseDistance + (ringIndex * ringSpacing);

        // Add spiral offset for more dynamic look
        const spiralOffset = ringIndex * 0.3;
        const angle = angleInRing + spiralOffset;

        // Vibrant, cycling colors
        const hue = (200 + ringIndex * 30 + (index % 50)) % 360;

        // Varying sizes for depth
        const size = 1.5 + (ringIndex % 3) * 0.5 + ((index % 20) / 20);

        // Pulsating opacity
        const opacity = 0.3 + ((ringIndex % 4) * 0.15) + ((index % 30) / 100);

        return { angle, distance, hue, size, opacity };
    },

    applyMotion: (context: AnimationMotionContext): void => {
        const { particle, target, centerX, centerY, particleIndex } = context;
        const time = Date.now() * 0.001;

        // Rotating motion - faster rotation for inner rings
        const rotationSpeed = 0.015 / (1 + target.distance * 0.002);
        particle.angle += rotationSpeed;

        // Pulsating distance - creates breathing effect
        const pulseFrequency = 0.8 + (particleIndex % 10) * 0.1;
        const pulseAmplitude = 20 + (particleIndex % 5) * 5;
        const pulse = Math.sin(time * pulseFrequency + particle.angle * 2) * pulseAmplitude;
        const dynamicDistance = target.distance + pulse;

        // Multi-layered wave motion
        const wave1 = Math.sin(time * 0.5 + particle.angle * 3) * 10;
        const wave2 = Math.cos(time * 0.7 + particle.angle * 2) * 8;

        // Calculate dynamic target position
        const burstX = centerX + Math.cos(particle.angle) * (dynamicDistance + wave1);
        const burstY = centerY + Math.sin(particle.angle) * (dynamicDistance + wave2);

        // Stronger pull for more dynamic movement
        particle.vx += (burstX - particle.x) * 0.012;
        particle.vy += (burstY - particle.y) * 0.012;

        // Add outward expansion force
        const expansionForce = Math.sin(time * 0.3) * 0.05;
        particle.vx += Math.cos(particle.angle) * expansionForce;
        particle.vy += Math.sin(particle.angle) * expansionForce;
    },
};

export default animation1;
