import type { Animation, AnimationContext, AnimationTarget, AnimationMotionContext } from './types';

/**
 * Animation 10: Concentric Beating Hearts
 * Particles assemble into 3 concentric heart shapes that circulate in opposite
 * directions and pulse with a double-beat heartbeat rhythm.
 */
const animation10: Animation = {
    name: 'Beating Heart Lattice',

    calculateTarget: (context: AnimationContext): AnimationTarget => {
        const { canvasWidth, canvasHeight, index, totalParticles } = context;

        // Configurations
        const layersCount = 3;
        const layerIndex = index % layersCount;
        
        // Distribute particles evenly across the layers
        const particlesPerLayer = Math.floor(totalParticles / layersCount);
        const positionInLayer = Math.floor(index / layersCount);
        const progress = positionInLayer / particlesPerLayer;

        // Parametric angle (0 to 2PI)
        const t = progress * Math.PI * 2;

        // Heart Parametric Equations
        const heartX = 16 * Math.pow(Math.sin(t), 3);
        const heartY = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

        // Center position
        const centerX = canvasWidth / 2;
        const centerY = canvasHeight / 2;

        // Dynamic scale relative to screen size and layer
        const baseScale = Math.min(canvasWidth, canvasHeight) * 0.012 * (0.6 + layerIndex * 0.38);
        
        const targetX = centerX + heartX * baseScale;
        const targetY = centerY + heartY * baseScale;

        // Convert coordinates from center for initial polar representation
        const dx = targetX - centerX;
        const dy = targetY - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);

        // Colors: Layer 0 (rose-red: 350), Layer 1 (magenta: 310), Layer 2 (neon pink: 335)
        const baseHue = layerIndex === 0 ? 350 : (layerIndex === 1 ? 310 : 335);

        // Size varies slightly by layer
        const size = 1.2 + layerIndex * 0.4 + Math.sin(progress * Math.PI) * 0.6;

        // Opacity
        const opacity = 0.5 + Math.sin(progress * Math.PI) * 0.2;

        return { angle, distance, hue: baseHue, size, opacity };
    },

    applyMotion: (context: AnimationMotionContext): void => {
        const { particle, target, canvasWidth, canvasHeight, centerX, centerY, particleIndex, totalParticles } = context;
        const time = Date.now() * 0.001;

        const layersCount = 3;
        const layerIndex = particleIndex % layersCount;
        
        const particlesPerLayer = Math.floor(totalParticles / layersCount);
        const positionInLayer = Math.floor(particleIndex / layersCount);
        const progress = positionInLayer / particlesPerLayer;

        // Alternating rotational direction per layer
        const direction = layerIndex % 2 === 0 ? 1 : -1;
        
        // Circulate particles around the heart perimeter over time
        const t = (progress + direction * time * 0.05) * Math.PI * 2;

        // Heart Parametric Equations
        const heartX = 16 * Math.pow(Math.sin(t), 3);
        const heartY = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

        // Heartbeat double-pulse rhythm (lub-dub)
        const heartSpeed = 1.3;
        const beatCycle = (time * heartSpeed) % Math.PI;
        // Primary beat (strong) + Secondary beat (echo)
        const pulse = 1.0 
            + Math.pow(Math.sin(beatCycle), 12) * 0.18
            + Math.pow(Math.sin(beatCycle - 0.25), 10) * 0.06;

        // Dynamic scale relative to screen size, layer index, and heartbeat pulse
        const baseScale = Math.min(canvasWidth, canvasHeight) * 0.012 * (0.6 + layerIndex * 0.38);
        const currentScale = baseScale * pulse;

        // Final target position
        const targetX = centerX + heartX * currentScale;
        const targetY = centerY + heartY * currentScale;

        // Spring-like pull toward the heart curve layout
        const pullStrength = 0.09;
        particle.vx += (targetX - particle.x) * pullStrength;
        particle.vy += (targetY - particle.y) * pullStrength;

        // Organic micro-shimmer/turbulence
        const shimmer = Math.sin(time * 5 + particleIndex) * 0.15;
        particle.vx += shimmer;
        particle.vy += shimmer;

        // Shimmering color hue: shift gently over time
        const baseHue = layerIndex === 0 ? 350 : (layerIndex === 1 ? 310 : 335);
        target.hue = (baseHue + Math.sin(time * 2 + progress * Math.PI) * 12 + 360) % 360;

        // Size pulses with the heartbeat
        const baseSize = 1.2 + layerIndex * 0.4 + Math.sin(progress * Math.PI) * 0.6;
        target.size = baseSize * (0.95 + (pulse - 1.0) * 0.6);

        // Opacity pulses with heartbeat
        target.opacity = (0.4 + Math.sin(time * 3 + progress * Math.PI * 2) * 0.2) * (0.9 + (pulse - 1.0) * 0.5);

        // Update polar angle representation
        const dx = particle.x - centerX;
        const dy = particle.y - centerY;
        particle.angle = Math.atan2(dy, dx);
    },
};

export default animation10;
