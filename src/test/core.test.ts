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

  describe('Control Methods', () => {
    test('start() should begin scrolling', () => {
      const texts = ['One', 'Two', 'Three'];
      const onStart = jest.fn();
      const scrollingText = new ScrollingText(container, texts, { onStart });
      
      scrollingText.start();
      
      expect(onStart).toHaveBeenCalled();
    });

    test('pause() should stop scrolling without resetting', () => {
      const texts = ['One', 'Two', 'Three'];
      const scrollingText = new ScrollingText(container, texts);
      
      scrollingText.start();
      scrollingText.pause();
      
      // After pause, starting again should work
      expect(() => scrollingText.start()).not.toThrow();
    });

    test('stop() should reset to first text', () => {
      const texts = ['One', 'Two', 'Three'];
      const onStop = jest.fn();
      const scrollingText = new ScrollingText(container, texts, { onStop });
      
      scrollingText.start();
      jest.advanceTimersByTime(3000);
      scrollingText.stop();
      
      expect(onStop).toHaveBeenCalled();
    });

    test('dispose() should clear container', () => {
      const texts = ['One', 'Two'];
      const scrollingText = new ScrollingText(container, texts);
      
      scrollingText.dispose();
      
      expect(container.innerHTML).toBe('');
    });
  });

  describe('Callbacks', () => {
    test('onChange should be called when text changes', () => {
      const texts = ['One', 'Two', 'Three'];
      const onChange = jest.fn();
      const scrollingText = new ScrollingText(container, texts, { onChange });
      
      scrollingText.start();
      jest.advanceTimersByTime(3000);
      
      expect(onChange).toHaveBeenCalledWith(1);
    });

    test('onReachEnd should be called at last text', () => {
      const texts = ['One', 'Two'];
      const onReachEnd = jest.fn();
      const scrollingText = new ScrollingText(container, texts, { 
        onReachEnd,
        interval: 1000 
      });
      
      scrollingText.start();
      jest.advanceTimersByTime(1000);
      
      expect(onReachEnd).toHaveBeenCalled();
    });

    test('onStart should be called when starting', () => {
      const texts = ['One', 'Two'];
      const onStart = jest.fn();
      const scrollingText = new ScrollingText(container, texts, { onStart });
      
      scrollingText.start();
      
      expect(onStart).toHaveBeenCalledTimes(1);
    });

    test('onStop should be called when stopping', () => {
      const texts = ['One', 'Two'];
      const onStop = jest.fn();
      const scrollingText = new ScrollingText(container, texts, { onStop });
      
      scrollingText.stop();
      
      expect(onStop).toHaveBeenCalled();
    });
  });

  describe('Looping Behavior', () => {
    test('should loop by default', () => {
      const texts = ['One', 'Two'];
      const onChange = jest.fn();
      const scrollingText = new ScrollingText(container, texts, { 
        onChange,
        interval: 1000,
      });
      
      scrollingText.start();
      jest.advanceTimersByTime(1000); // Move to second text
      jest.advanceTimersByTime(1000); // Should loop back to first
      
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenLastCalledWith(0);
    });

    test('should stop when loop is false', () => {
      const texts = ['One', 'Two'];
      const onStop = jest.fn();
      const scrollingText = new ScrollingText(container, texts, { 
        loop: false,
        onStop,
        interval: 1000,
      });
      
      scrollingText.start();
      jest.advanceTimersByTime(1000);
      
      expect(onStop).toHaveBeenCalled();
    });
  });

  describe('Timing', () => {
    test('should respect custom interval', () => {
      const texts = ['One', 'Two', 'Three'];
      const onChange = jest.fn();
      const customInterval = 5000;
      const scrollingText = new ScrollingText(container, texts, { 
        interval: customInterval,
        onChange 
      });
      
      scrollingText.start();
      jest.advanceTimersByTime(customInterval);
      
      expect(onChange).toHaveBeenCalledTimes(1);
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
      const onStart = jest.fn();
      const scrollingText = new ScrollingText(container, texts, { onStart });
      
      scrollingText.start();
      scrollingText.start();
      scrollingText.start();
      
      // Should only call onStart once
      expect(onStart).toHaveBeenCalledTimes(1);
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
