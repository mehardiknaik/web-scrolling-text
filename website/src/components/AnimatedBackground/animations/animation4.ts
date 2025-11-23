import type { Animation, AnimationContext, AnimationTarget, AnimationMotionContext } from './types';

/**
 * Animation 4: Spiral Galaxy
 * Multiple parallel spiral arms with well-separated dots
 */
const animation4: Animation = {
    name: 'Spiral Galaxy',

    calculateTarget: (context: AnimationContext): AnimationTarget => {
        const { canvasWidth, canvasHeight, index, totalParticles } = context;

        // Use ALL particles - distribute across MORE arms for better spreading
        const numArms = 8; // More arms = better distribution
        const particlesPerArm = Math.floor(totalParticles / numArms);
        const armIndex = Math.floor(index / particlesPerArm);
        const safeArmIndex = Math.min(armIndex, numArms - 1);
        const positionInArm = index % particlesPerArm;
        const normalizedPosition = positionInArm / particlesPerArm;

        // Base angle for this arm (evenly distribute arms around the circle)
        const armBaseAngle = (safeArmIndex * Math.PI * 2) / numArms;

        // Distance from center - grows as we move along the arm
        const minDistance = Math.min(canvasWidth, canvasHeight) * 0.08;
        const maxDistance = Math.min(canvasWidth, canvasHeight) * 0.45;
        const distance = minDistance + Math.pow(normalizedPosition, 0.9) * (maxDistance - minDistance);

        // Spiral angle - combines base arm angle with spiral effect
        const spiralTightness = 0.001; // Very loose spiral
        const angle = armBaseAngle + (distance * spiralTightness);

        // Add radial offset to spread dots perpendicular to the spiral
        // This prevents cluttering by spreading dots outward from the spiral line
        const radialOffset = ((positionInArm % 5) - 2) * 8; // Spread dots ±16 pixels from spiral line
        const offsetDistance = distance + radialOffset;

        // Color gradient - different base color per arm
        const baseHue = 180 + (safeArmIndex * 25);
        const hue = (baseHue + (normalizedPosition * 60)) % 360;

        // Size variation
        const size = 1.5 + ((positionInArm % 10) / 10) * 1.5;

        // Opacity variation
        const opacity = 0.3 + (normalizedPosition * 0.4) + ((positionInArm % 8) / 20);

        return { angle, distance: offsetDistance, hue, size, opacity };
    },

    applyMotion: (context: AnimationMotionContext): void => {
        const { particle, targetX, targetY, particleIndex, totalParticles } = context;
        const time = Date.now() * 0.001;

        // Calculate position in arm for wave effects
        const numArms = 4;
        const particlesPerArm = Math.floor(totalParticles / numArms);
        const positionInArm = Math.floor(particleIndex / numArms);
        const normalizedPosition = positionInArm / particlesPerArm;

        // Flowing wave motion along the spiral
        const waveSpeed = 0.8;
        const waveAmplitude = 12;
        const waveFrequency = 3;
        const wave = Math.sin(time * waveSpeed + normalizedPosition * Math.PI * waveFrequency) * waveAmplitude;

        const flowX = targetX + Math.cos(particle.angle + Math.PI / 2) * wave;
        const flowY = targetY + Math.sin(particle.angle + Math.PI / 2) * wave;

        // Gentle pull towards target with wave offset
        const pullStrength = 0.005;
        particle.vx += (flowX - particle.x) * pullStrength;
        particle.vy += (flowY - particle.y) * pullStrength;
    },
};

export default animation4;
