import "./style.css";
import { Options, TextType } from "./types";

const defaultOptions: Options = {
  interval: 5000,
  animationDuration: 1000,
};

class ScrollingText {
  private _container: any;
  private _intervalTime: number | undefined;
  private _texts: TextType[];
  private _animationDuration: number | undefined;
  private _currentIndex: number;
  private _timer: NodeJS.Timeout | null = null;
  private _innerWrapper: HTMLDivElement | any;
  private _currentTextEl: HTMLDivElement | undefined | null;
  private _enterAnimation: string | undefined;
  private _exitAnimation: string | undefined;
  constructor(
    container: HTMLElement,
    texts: TextType[],
    options: Options = {}
  ) {
    options = { ...defaultOptions, ...options };
    this._container = container;
    this._texts = texts;
    this._intervalTime = options.interval;
    this._animationDuration = options.animationDuration;
    this._currentIndex = 0;
    this._enterAnimation = options.enterAnimation;
    this._exitAnimation = options.exitAnimation;
    this.pause();

    this._setup();
  }

  private _setup() {
    this._innerWrapper = document.createElement("div");
    this._innerWrapper.className = "scroll-wrapper";
    this._innerWrapper.style.setProperty(
      "--duration",
      `${this._animationDuration}ms`
    );
    if(this._enterAnimation)this._innerWrapper.style.setProperty(
      "--enter-animation",
      this._enterAnimation
    );
    if(this._exitAnimation)this._innerWrapper.style.setProperty(
      "--exit-animation",
      this._exitAnimation
    );
    this._container.innerHTML = "";
    this._container.appendChild(this._innerWrapper);
    this._showText(this._texts[this._currentIndex]);
  }

  private _showText(text: TextType) {
    const textEl = document.createElement("div");
    textEl.className = "scroll-text enter";
    if (typeof text === "string") {
      textEl.innerHTML = text;
    }
    this._innerWrapper?.appendChild(textEl);

    if (this._currentTextEl) {
      this._currentTextEl.classList.add("exit");
      setTimeout(() => {
        if (
          this._currentTextEl &&
          this._innerWrapper?.contains(this._currentTextEl)
        ) {
          this._innerWrapper.removeChild(this._currentTextEl);
        }
        textEl.classList.remove("enter");
        this._currentTextEl = textEl;
      }, this._animationDuration);
    } else {
      this._currentTextEl = textEl;
    }
  }

  start() {
    if (this._timer) return; // already running
    this._timer = setInterval(() => {
      this._next();
    }, this._intervalTime);
  }

  private _next() {
    this._currentIndex = (this._currentIndex + 1) % this._texts.length;
    this._showText(this._texts[this._currentIndex]);
  }

  pause() {
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }

  play() {
    if (!this._timer) {
      this.start();
    }
  }

  stop() {
    this.pause();
    if (this._currentIndex) {
      this._currentIndex = 0;
      this._showText(this._texts[this._currentIndex]); // no enter animation
    }
  }
}

export default ScrollingText;
