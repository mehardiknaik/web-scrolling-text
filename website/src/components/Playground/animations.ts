// Animation configuration type
export interface AnimationOption {
  value: string;
  label: string;
  hasEnter?: boolean;
  hasExit?: boolean;
}

// Available animations for dropdowns
export const animations: AnimationOption[] = [
  { value: 'none', label: 'None (Default)' },
  { value: 'fade', label: 'Fade', hasEnter: true, hasExit: true },
  { value: 'bounce', label: 'Bounce', hasEnter: true, hasExit: true },
  { value: 'flip', label: 'Flip', hasEnter: true, hasExit: true },
  { value: 'rotate', label: 'Rotate', hasEnter: true, hasExit: true },
  { value: 'scaleIn', label: 'Scale In', hasEnter: true, hasExit: true },
  { value: 'scaleOut', label: 'Scale Out', hasEnter: true, hasExit: true },
  { value: 'zoomInDown', label: 'Zoom In Down', hasEnter: true, hasExit: true },
  { value: 'cinematic', label: 'Cinematic', hasEnter: true, hasExit: true },
  { value: 'glitch', label: 'Glitch', hasEnter: true, hasExit: true },
  { value: 'swing', label: 'Swing', hasEnter: true, hasExit: true },
];

// Map of animation names to their dynamic import functions
const animationLoaders: Record<string, () => Promise<any>> = {
  fade: () => import('web-scrolling-text/animation/fade'),
  bounce: () => import('web-scrolling-text/animation/bounce'),
  flip: () => import('web-scrolling-text/animation/flip'),
  rotate: () => import('web-scrolling-text/animation/rotate'),
  scaleIn: () => import('web-scrolling-text/animation/scaleIn'),
  scaleOut: () => import('web-scrolling-text/animation/scaleOut'),
  zoomInDown: () => import('web-scrolling-text/animation/zoomInDown'),
  cinematic: () => import('web-scrolling-text/animation/cinematic'),
  glitch: () => import('web-scrolling-text/animation/glitch'),
  swing: () => import('web-scrolling-text/animation/swing'),
};

// Helper function to load animation dynamically
const loadAnimation = async (name: string) => {
  console.log(`Loading animation: ${name}`);
  if (name === 'none' || !animationLoaders[name]) return {};

  try {
    // Dynamic import using the loader map
    const module = await animationLoaders[name]();
    console.log(`Loaded module for ${name}:`, module);
    return module.default || module;
  } catch (error) {
    console.error(`Failed to load animation: ${name}`, error);
    return {};
  }
};

// Helper function to build config from separate enter/exit animations
export const getAnimationConfig = async (enterAnim: string, exitAnim: string) => {
  console.log(`Getting config for enter: ${enterAnim}, exit: ${exitAnim}`);
  const [enterConfig, exitConfig] = await Promise.all([
    loadAnimation(enterAnim),
    loadAnimation(exitAnim)
  ]);

  const config = {
    enterAnimation: enterConfig.enterAnimation,
    exitAnimation: exitConfig.exitAnimation,
  };
  console.log('Generated config:', config);
  return config;
};
