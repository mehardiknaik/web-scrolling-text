/**
 * Test suite for animation modules
 */

import fade from '../animation/fade';
import bounce from '../animation/bounce';
import flip from '../animation/flip';
import rotate from '../animation/rotate';
import scaleIn from '../animation/scaleIn';
import scaleOut from '../animation/scaleOut';
import zoomInDown from '../animation/zoomInDown';

describe('Animation Modules', () => {
  describe('Fade Animation', () => {
    test('should export animation configuration', () => {
      expect(fade).toBeDefined();
      expect(fade).toHaveProperty('enterAnimation');
      expect(fade).toHaveProperty('exitAnimation');
    });

    test('should have string animation values', () => {
      expect(typeof fade.enterAnimation).toBe('string');
      expect(typeof fade.exitAnimation).toBe('string');
    });
  });

  describe('Bounce Animation', () => {
    test('should export animation configuration', () => {
      expect(bounce).toBeDefined();
      expect(bounce).toHaveProperty('enterAnimation');
      expect(bounce).toHaveProperty('exitAnimation');
    });

    test('should have string animation values', () => {
      expect(typeof bounce.enterAnimation).toBe('string');
      expect(typeof bounce.exitAnimation).toBe('string');
    });
  });

  describe('Flip Animation', () => {
    test('should export animation configuration', () => {
      expect(flip).toBeDefined();
      expect(flip).toHaveProperty('enterAnimation');
      expect(flip).toHaveProperty('exitAnimation');
    });

    test('should have string animation values', () => {
      expect(typeof flip.enterAnimation).toBe('string');
      expect(typeof flip.exitAnimation).toBe('string');
    });
  });

  describe('Rotate Animation', () => {
    test('should export animation configuration', () => {
      expect(rotate).toBeDefined();
      expect(rotate).toHaveProperty('enterAnimation');
      expect(rotate).toHaveProperty('exitAnimation');
    });

    test('should have string animation values', () => {
      expect(typeof rotate.enterAnimation).toBe('string');
      expect(typeof rotate.exitAnimation).toBe('string');
    });
  });

  describe('ScaleIn Animation', () => {
    test('should export animation configuration', () => {
      expect(scaleIn).toBeDefined();
      expect(scaleIn).toHaveProperty('enterAnimation');
      expect(scaleIn).toHaveProperty('exitAnimation');
    });

    test('should have string animation values', () => {
      expect(typeof scaleIn.enterAnimation).toBe('string');
      expect(typeof scaleIn.exitAnimation).toBe('string');
    });
  });

  describe('ScaleOut Animation', () => {
    test('should export animation configuration', () => {
      expect(scaleOut).toBeDefined();
      expect(scaleOut).toHaveProperty('enterAnimation');
      expect(scaleOut).toHaveProperty('exitAnimation');
    });

    test('should have string animation values', () => {
      expect(typeof scaleOut.enterAnimation).toBe('string');
      expect(typeof scaleOut.exitAnimation).toBe('string');
    });
  });

});

describe('ZoomInDown Animation', () => {
  test('should export animation configuration', () => {
    expect(zoomInDown).toBeDefined();
    expect(zoomInDown).toHaveProperty('enterAnimation');
    expect(zoomInDown).toHaveProperty('exitAnimation');
  });

  test('should have string animation values', () => {
    expect(typeof zoomInDown.enterAnimation).toBe('string');
    expect(typeof zoomInDown.exitAnimation).toBe('string');
  });
});

describe('All Animations', () => {
  const animations = [fade, bounce, flip, rotate, scaleIn, scaleOut, zoomInDown];

  test('should all be defined objects', () => {
    animations.forEach(animation => {
      expect(animation).toBeDefined();
      expect(typeof animation).toBe('object');
    });
  });

  test('should all have exitAnimation', () => {
    animations.forEach(animation => {
      expect(animation).toHaveProperty('exitAnimation');
      expect(typeof animation.exitAnimation).toBe('string');
    });
  });

  test('should have exit animation names', () => {
    const exitAnimations = animations.map(a => a.exitAnimation);

    exitAnimations.forEach(anim => {
      expect(typeof anim).toBe('string');
      expect(anim).toBeTruthy();
    });
  });

  test('animations with enterAnimation should have enter animation names', () => {
    const animationsWithEnter = animations.filter(a => 'enterAnimation' in a);
    const enterAnimations = animationsWithEnter.map(a => (a as any).enterAnimation);

    enterAnimations.forEach(anim => {
      expect(typeof anim).toBe('string');
      expect(anim).toBeTruthy();
    });
  });
});
});
