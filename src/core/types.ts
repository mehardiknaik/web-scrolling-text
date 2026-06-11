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



export interface OptionsType extends ConfigType { }

export type TextType = string;



export interface ScrollingTextEventMap {
  change: [number, HTMLDivElement];
  reachEnd: [];
  start: [];
  stop: [];
  pause: [number];
}

export type EventNameType = keyof ScrollingTextEventMap
export type EventCallbackType<K extends EventNameType> = (...data: ScrollingTextEventMap[K]) => void