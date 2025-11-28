import animation1 from './animation1';
import animation2 from './animation2';
import animation3 from './animation3';
import animation4 from './animation4';
import animation5 from './animation5';
import animation6 from './animation6';
import animation7 from './animation7';
import animation8 from './animation8';
import type { Animation } from './types';

/**
 * Animation Registry
 * 
 * To add a new animation:
 * 1. Create a new file: animationN.ts (where N is the next number)
 * 2. Import it above
 * 3. Add it to the animations array below
 * 
 * The animation will automatically be included in the rotation!
 */
export const animations: Animation[] = [
    animation1,
    animation2,
    animation3,
    animation4,
    animation5,
    animation6,
    animation7,
    animation8,
];

/**
 * Get animation by index with automatic wrapping
 */
export function getAnimation(index: number): Animation {
    const normalizedIndex = index % animations.length;
    return animations[normalizedIndex];
}

export type { Animation, AnimationContext, AnimationTarget, AnimationMotionContext, Particle } from './types';
