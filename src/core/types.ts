import ScrollingText from "./scrolling";

export interface ConfigType {
  /**
   * @description: The interval between each text change
   * @type: {number}
   * @requires: false
   * @default: 3000
   */
  interval?: number;
  /**
   * @description: The duration of the animation
   * @type: {number}
   * @requires: false
   * @default: 1000
   */
  animationDuration?: number;
  /**
   * @description: The animation to be used when the text enters the screen
   * @type: {string}
   * @requires: false
   * @notes: The animation should be a valid CSS animation
   */
  enterAnimation?: string;
  /**
   * @description: The animation to be used when the text exits the screen
   * @type: {string}
   * @requires: false
   * @notes: The animation should be a valid CSS animation
   */
  exitAnimation?: string;
  /**
   * @description: loop the text after reaching the end
   * @type: {boolean}
   * @requires: false
   * @default: true
   */
  loop?: boolean;
}

export interface MethodType {
  /**
   * @description: Callback when the text reaches the end
   * @type: {() => void}
   * @requires: false
   */
  onReachEnd?: () => void;
  /**
   * @description: Callback when the text changes
   * @type: {(index: number) => void}
   * @requires: false
   */
  onChange?: (index: number) => void;
  /**
   * @description: Callback when the text starts scrolling
   * @type: {() => void}
   * @requires: false
   */
  onStart?: () => void;
  /**
   * @description: Callback when the text stops scrolling
   * @type: {() => void}
   * @requires: false
   */
  onStop?: () => void;
}

export interface OptionsType extends ConfigType, MethodType {}

export type TextType = string;

export interface PluginType {
  name: string;
  init: (scrolling: ScrollingText, options: PluginOptionsType) => void;
}

interface PluginOptionsType {
  container: HTMLElement;
  wrapper: HTMLDivElement;
  text: HTMLDivElement | null | undefined;
  [key: string]: any;
}
