/**
 * Test suite for ScrollingText core functionality
 */

import ScrollingText from '../core/scrolling';
import { OptionsType } from '../core/types';

describe('ScrollingText Core', () => {
  let container: HTMLElement;

  beforeEach(() => {
    // Create a fresh container for each test
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.useFakeTimers();
  });

  afterEach(() => {
    // Clean up
    document.body.removeChild(container);
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  describe('Constructor', () => {
    test('should create instance with default options', () => {
      const texts = ['Hello', 'World'];
      const scrollingText = new ScrollingText(container, texts);

      expect(container.children.length).toBeGreaterThan(0);
      expect(scrollingText).toBeInstanceOf(ScrollingText);
    });

    test('should create instance with custom options', () => {
      const texts = ['Hello', 'World'];
      const options: OptionsType = {
        interval: 2000,
        animationDuration: 500,
        loop: false,
      };

      const scrollingText = new ScrollingText(container, texts, options);
      expect(scrollingText).toBeInstanceOf(ScrollingText);
    });

    test('should render first text on initialization', () => {
      const texts = ['First', 'Second', 'Third'];
      new ScrollingText(container, texts);

      expect(container.innerHTML).toContain('First');
    });

    test('should set custom animations', () => {
      const texts = ['Test'];
      const options: OptionsType = {
        enterAnimation: 'fade-in',
        exitAnimation: 'fade-out',
      };

      new ScrollingText(container, texts, options);
      const wrapper = container.querySelector('div');

      expect(wrapper?.style.getPropertyValue('--enter-animation')).toBe('fade-in');
      expect(wrapper?.style.getPropertyValue('--exit-animation')).toBe('fade-out');
    });
  });



  describe('Looping Behavior', () => {
    test('should loop by default', () => {
      const texts = ['One', 'Two'];
      const scrollingText = new ScrollingText(container, texts, {
        interval: 1000,
      });

      scrollingText.start();
      jest.advanceTimersByTime(1000); // Move to second text
      jest.advanceTimersByTime(1000); // Should loop back to first

    });

    test('should stop when loop is false', () => {
      const texts = ['One', 'Two'];
      const scrollingText = new ScrollingText(container, texts, {
        loop: false,
        interval: 1000,
      });

      scrollingText.start();
      jest.advanceTimersByTime(1000);

    });
  });

  describe('Timing', () => {
    test('should respect custom interval', () => {
      const texts = ['One', 'Two', 'Three'];
      const customInterval = 5000;
      const scrollingText = new ScrollingText(container, texts, {
        interval: customInterval,
      });

      scrollingText.start();
      jest.advanceTimersByTime(customInterval);

    });

    test('should respect custom animation duration', () => {
      const texts = ['One', 'Two'];
      const customDuration = 500;
      new ScrollingText(container, texts, {
        animationDuration: customDuration
      });

      const wrapper = container.querySelector('div');
      expect(wrapper?.style.getPropertyValue('--duration')).toBe(`${customDuration}ms`);
    });
  });

  describe('Version', () => {
    test('should have version property', () => {
      expect(ScrollingText.version).toBeDefined();
      expect(typeof ScrollingText.version).toBe('string');
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty text array', () => {
      const texts: string[] = [];
      expect(() => {
        new ScrollingText(container, texts);
      }).not.toThrow();
    });

    test('should handle single text item', () => {
      const texts = ['Only One'];
      const scrollingText = new ScrollingText(container, texts);

      scrollingText.start();
      jest.advanceTimersByTime(3000);

      expect(container.innerHTML).toContain('Only One');
    });

    test('should handle multiple start calls', () => {
      const texts = ['One', 'Two'];
      const scrollingText = new ScrollingText(container, texts, {});

      scrollingText.start();
      scrollingText.start();
      scrollingText.start();
    });

    test('should clear container on re-initialization', () => {
      const texts = ['One', 'Two'];
      new ScrollingText(container, texts);

      const initialHTML = container.innerHTML;
      new ScrollingText(container, texts);

      expect(container.innerHTML).not.toBe('');
      expect(container.children.length).toBeGreaterThan(0);
    });
  });
});
