import type { Animation, AnimationContext, AnimationTarget, AnimationMotionContext } from './types';

/**
 * Animation 3: Scattered Nebula
 * Clustered particles with slow drift and swirl
 */
const animation3: Animation = {
    name: 'Scattered Nebula',

    calculateTarget: (context: AnimationContext): AnimationTarget => {
        const { canvasWidth, canvasHeight, centerX, centerY, index, totalParticles } = context;

        const clusterCount = 8;
        const clusterIndex = index % clusterCount;
        const clusterAngle = (clusterIndex / clusterCount) * Math.PI * 2;
        const clusterDistance = Math.min(canvasWidth, canvasHeight) * 0.15;
        const clusterX = centerX + Math.cos(clusterAngle) * clusterDistance;
        const clusterY = centerY + Math.sin(clusterAngle) * clusterDistance;
        const spread = Math.min(canvasWidth, canvasHeight) * 0.15;
        const localAngle = ((index % (totalParticles / clusterCount)) / (totalParticles / clusterCount)) * Math.PI * 2;
        const localDistance = Math.random() * spread;
        const x = clusterX + Math.cos(localAngle) * localDistance;
        const y = clusterY + Math.sin(localAngle) * localDistance;
        const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
        const angle = Math.atan2(y - centerY, x - centerX);
        const hue = 280 + (index % 80);
        const size = 1 + ((index % 40) / 10);
        const opacity = 0.15 + ((index % 70) / 100);

        return { angle, distance, hue, size, opacity };
    },

    applyMotion: (context: AnimationMotionContext): void => {
        const { particle, targetX, targetY } = context;

        // Scattered Nebula - slow drift and swirl
        const driftSpeed = 0.002;
        particle.angle += driftSpeed;
        const driftX = Math.cos(Date.now() * 0.0003 + particle.angle) * 0.15;
        const driftY = Math.sin(Date.now() * 0.0003 + particle.angle) * 0.15;
        particle.vx += driftX;
        particle.vy += driftY;
        // Pull towards target position
        particle.vx += (targetX - particle.x) * 0.001;
        particle.vy += (targetY - particle.y) * 0.001;
    },
};

export default animation3;
