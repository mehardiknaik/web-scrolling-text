export interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    angle: number;
    distance: number;
    hue: number;
}

export interface AnimationContext {
    canvasWidth: number;
    canvasHeight: number;
    centerX: number;
    centerY: number;
    index: number;
    totalParticles: number;
}

export interface AnimationTarget {
    angle: number;
    distance: number;
    hue: number;
    size: number;
    opacity: number;
}

export interface AnimationMotionContext extends AnimationContext {
    particle: Particle;
    target: AnimationTarget;
    targetX: number;
    targetY: number;
    particleIndex: number;
}

export interface Animation {
    name: string;
    calculateTarget: (context: AnimationContext) => AnimationTarget;
    applyMotion: (context: AnimationMotionContext) => void;
}
