// Import all animations statically
import fade from 'web-scrolling-text/animation/fade';
import bounce from 'web-scrolling-text/animation/bounce';
import flip from 'web-scrolling-text/animation/flip';
import rotate from 'web-scrolling-text/animation/rotate';
import scaleIn from 'web-scrolling-text/animation/scaleIn';
import scaleOut from 'web-scrolling-text/animation/scaleOut';
import zoomInDown from 'web-scrolling-text/animation/zoomInDown';

// Animation configuration type
export interface AnimationOption {
  value: string;
  label: string;
  enterAnimation?: string;
  exitAnimation?: string;
}

// Extract individual animation strings from imported configs
const animationMap: Record<string, { enterAnimation?: string; exitAnimation?: string }> = {
  fade,
  bounce,
  flip,
  rotate,
  scaleIn,
  scaleOut,
  zoomInDown,
};

// Available animations for dropdowns
export const animations: AnimationOption[] = [
  { value: 'none', label: 'None (Default)' },
  { value: 'fade', label: 'Fade', ...animationMap.fade },
  { value: 'bounce', label: 'Bounce', ...animationMap.bounce },
  { value: 'flip', label: 'Flip', ...animationMap.flip },
  { value: 'rotate', label: 'Rotate', ...animationMap.rotate },
  { value: 'scaleIn', label: 'Scale In', ...animationMap.scaleIn },
  { value: 'scaleOut', label: 'Scale Out', ...animationMap.scaleOut },
  { value: 'zoomInDown', label: 'Zoom In Down', ...animationMap.zoomInDown },
];


// Helper function to get animation strings by name
export const getAnimationByName = (animationName: string): { enterAnimation?: string; exitAnimation?: string } => {
  const animation = animations.find(anim => anim.value === animationName);
  if (!animation || animationName === 'none') {
    return {};
  }
  return {
    enterAnimation: animation.enterAnimation,
    exitAnimation: animation.exitAnimation,
  };
};

// Helper function to build config from separate enter/exit animations
export const getAnimationConfig = (enterAnim: string, exitAnim: string) => {

  const enterConfig = getAnimationByName(enterAnim);
  const exitConfig = getAnimationByName(exitAnim);

  return {
    enterAnimation: enterConfig.enterAnimation,
    exitAnimation: exitConfig.exitAnimation,
  };
};
