import type { Animation, AnimationContext, AnimationTarget, AnimationMotionContext } from './types';

/**
 * Animation 2: Circular Rings
 * Rotating rings with slight oscillation
 */
const animation2: Animation = {
    name: 'Circular Rings',

    calculateTarget: (context: AnimationContext): AnimationTarget => {
        const { canvasWidth, canvasHeight, index, totalParticles } = context;

        const ringCount = 5;
        const ringIndex = index % ringCount;
        const particlesPerRing = Math.floor(totalParticles / ringCount);
        const angleInRing = ((index % particlesPerRing) / particlesPerRing) * Math.PI * 2;
        const angle = angleInRing;
        const ringSpacing = Math.min(canvasWidth, canvasHeight) * 0.08;
        const distance = (ringIndex + 1) * ringSpacing;
        const hue = 160 + ringIndex * 20;
        const size = 1.5 + ((index % 25) / 10);
        const opacity = 0.3 + ((index % 50) / 100);

        return { angle, distance, hue, size, opacity };
    },

    applyMotion: (context: AnimationMotionContext): void => {
        const { particle, target, centerX, centerY } = context;

        // Circular Rings - rotate with slight oscillation
        const orbitalSpeed = 0.008;
        particle.angle += orbitalSpeed;
        const oscillation = Math.sin(Date.now() * 0.001 + particle.angle) * 5;
        const ringX = centerX + Math.cos(particle.angle) * (target.distance + oscillation);
        const ringY = centerY + Math.sin(particle.angle) * (target.distance + oscillation);
        particle.vx += (ringX - particle.x) * 0.006;
        particle.vy += (ringY - particle.y) * 0.006;
    },
};

export default animation2;
