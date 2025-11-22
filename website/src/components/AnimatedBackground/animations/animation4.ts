import type { Animation, AnimationContext, AnimationTarget, AnimationMotionContext } from './types';

/**
 * Animation 4: Spiral Galaxy
 * Spiral arms with flowing wave motion
 */
const animation4: Animation = {
    name: 'Spiral Galaxy',

    calculateTarget: (context: AnimationContext): AnimationTarget => {
        const { canvasWidth, canvasHeight, index, totalParticles } = context;

        const baseAngle = (index / totalParticles) * Math.PI * 2;
        const spiralArm = index % 3;
        const armAngle = baseAngle + (spiralArm * Math.PI * 2 / 3);
        const distance = Math.pow((index % (totalParticles / 3)) / (totalParticles / 3), 0.5) * Math.min(canvasWidth, canvasHeight) * 0.45;
        const spiralTightness = 0.003;
        const angle = armAngle + distance * spiralTightness;
        const hue = 220 + (index % 60);
        const size = 1 + ((index % 30) / 10);
        const opacity = 0.2 + ((index % 40) / 100);

        return { angle, distance, hue, size, opacity };
    },

    applyMotion: (context: AnimationMotionContext): void => {
        const { particle, targetX, targetY } = context;

        // Spiral Galaxy - flowing wave motion
        const waveSpeed = 0.001;
        const waveTime = Date.now() * waveSpeed;
        const waveAmplitude = 15;
        const waveFrequency = 0.02;
        const waveX = Math.sin(waveTime + targetY * waveFrequency) * waveAmplitude;
        const waveY = Math.cos(waveTime + targetX * waveFrequency) * waveAmplitude;
        const flowX = targetX + waveX;
        const flowY = targetY + waveY;
        particle.vx += (flowX - particle.x) * 0.004;
        particle.vy += (flowY - particle.y) * 0.004;
    },
};

export default animation4;
