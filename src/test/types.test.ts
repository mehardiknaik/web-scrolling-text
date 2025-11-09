/**
 * Test suite for TypeScript type definitions
 */

import type { OptionsType, ConfigType, MethodType, TextType } from '../core/types';

describe('Type Definitions', () => {
  describe('TextType', () => {
    test('should accept string values', () => {
      const text: TextType = 'Hello World';
      expect(typeof text).toBe('string');
    });
  });

  describe('ConfigType', () => {
    test('should accept valid configuration', () => {
      const config: ConfigType = {
        interval: 3000,
        animationDuration: 1000,
        enterAnimation: 'fade-in',
        exitAnimation: 'fade-out',
        loop: true,
      };
      
      expect(config.interval).toBe(3000);
      expect(config.animationDuration).toBe(1000);
      expect(config.enterAnimation).toBe('fade-in');
      expect(config.exitAnimation).toBe('fade-out');
      expect(config.loop).toBe(true);
    });

    test('should allow partial configuration', () => {
      const config: ConfigType = {
        interval: 2000,
      };
      
      expect(config.interval).toBe(2000);
    });

    test('should allow empty configuration', () => {
      const config: ConfigType = {};
      expect(config).toBeDefined();
    });
  });

  describe('MethodType', () => {
    test('should accept valid callbacks', () => {
      const methods: MethodType = {
        onReachEnd: () => console.log('end'),
        onChange: (index: number) => console.log(index),
        onStart: () => console.log('start'),
        onStop: () => console.log('stop'),
      };
      
      expect(typeof methods.onReachEnd).toBe('function');
      expect(typeof methods.onChange).toBe('function');
      expect(typeof methods.onStart).toBe('function');
      expect(typeof methods.onStop).toBe('function');
    });

    test('should allow partial callbacks', () => {
      const methods: MethodType = {
        onChange: (index: number) => console.log(index),
      };
      
      expect(typeof methods.onChange).toBe('function');
    });

    test('should allow empty methods', () => {
      const methods: MethodType = {};
      expect(methods).toBeDefined();
    });
  });

  describe('OptionsType', () => {
    test('should accept both config and methods', () => {
      const options: OptionsType = {
        interval: 3000,
        animationDuration: 1000,
        enterAnimation: 'fade-in',
        exitAnimation: 'fade-out',
        loop: true,
        onReachEnd: () => {},
        onChange: (index: number) => {},
        onStart: () => {},
        onStop: () => {},
      };
      
      expect(options.interval).toBe(3000);
      expect(typeof options.onChange).toBe('function');
    });

    test('should allow only config options', () => {
      const options: OptionsType = {
        interval: 2000,
        loop: false,
      };
      
      expect(options.interval).toBe(2000);
      expect(options.loop).toBe(false);
    });

    test('should allow only method options', () => {
      const options: OptionsType = {
        onChange: (index: number) => {},
        onStart: () => {},
      };
      
      expect(typeof options.onChange).toBe('function');
      expect(typeof options.onStart).toBe('function');
    });

    test('should allow empty options', () => {
      const options: OptionsType = {};
      expect(options).toBeDefined();
    });
  });

  describe('Type Compatibility', () => {
    test('ConfigType should be compatible with OptionsType', () => {
      const config: ConfigType = {
        interval: 3000,
      };
      
      const options: OptionsType = config;
      expect(options.interval).toBe(3000);
    });

    test('MethodType should be compatible with OptionsType', () => {
      const methods: MethodType = {
        onChange: (index: number) => {},
      };
      
      const options: OptionsType = methods;
      expect(typeof options.onChange).toBe('function');
    });
  });
});
