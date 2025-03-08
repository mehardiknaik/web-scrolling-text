export interface ConfigType {
  interval?: number;
  animationDuration?: number;
  enterAnimation?: string;
  exitAnimation?: string;
  loop?: boolean;
}

export interface MethodType {
  onReachEnd?: () => void;
  onChange?: (index: number) => void;
  onStart?: () => void;
  onStop?: () => void;
}

export interface OptionsType extends ConfigType, MethodType {}

export type TextType = string;
