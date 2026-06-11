import { OptionsType, TextType } from "./types";
import style from "./style.module.css";
import Event, { EventType } from "./events";

const defaultOptions: OptionsType = {
  interval: 3000,
  animationDuration: 1000,
  loop: true,
};

/**
 * @description: A class to create a scrolling text
 * @param {HTMLElement} container: The container element
 * @param {TextType[]} texts: The texts to be scrolled
 * @param {OptionsType} options: The options for the scrolling text
 * @returns {ScrollingText}
 * @requires: true
 */
class ScrollingText extends Event {
  private _container: HTMLElement;
  private _intervalTime: number | undefined;
  private _texts: TextType[];
  private _animationDuration: number | undefined;
  private _currentIndex: number;
  private _timer: NodeJS.Timeout | null = null;
  private _innerWrapper: HTMLDivElement | any;
  private _currentTextEl: HTMLDivElement | undefined | null;
  private _enterAnimation: string | undefined;
  private _exitAnimation: string | undefined;
  private _loop: boolean | undefined;

  constructor(
    container: HTMLElement,
    texts: TextType[],
    options: OptionsType = {}
  ) {
    super()
    options = { ...defaultOptions, ...options };
    this._container = container;
    this._texts = texts;
    this._intervalTime = options.interval;
    this._animationDuration = options.animationDuration;
    this._enterAnimation = options.enterAnimation;
    this._exitAnimation = options.exitAnimation;
    this._loop = options.loop;
    this._currentIndex = 0;
    this._setup();
  }

  private _setup() {
    this.dispose(); //clear any existing container
    this._innerWrapper = document.createElement("div");
    this._innerWrapper.className = style.wrapper;
    this._innerWrapper.style.setProperty(
      "--duration",
      `${this._animationDuration}ms`
    );
    if (this._enterAnimation)
      this._innerWrapper.style.setProperty(
        "--enter-animation",
        this._enterAnimation
      );
    else this._innerWrapper.classList.add(style.animationin); //default animation
    if (this._exitAnimation)
      this._innerWrapper.style.setProperty(
        "--exit-animation",
        this._exitAnimation
      );
    else this._innerWrapper.classList.add(style.animationout); //default animation
    this._container.appendChild(this._innerWrapper);
    this._showText(this._texts[this._currentIndex], false);
  }

  private _showText(text: TextType, withAnimation = true) {
    const textEl = document.createElement("div");
    textEl.className = style.text;
    textEl.setAttribute("text-index", this._currentIndex.toString());
    if (withAnimation) textEl.classList.add(style.enter);
    if (typeof text === "string") {
      textEl.innerHTML = text;
    }
    this._innerWrapper?.appendChild(textEl);
    this._calcWidth(textEl);

    if (this._currentTextEl) {
      this._emit(EventType.change, this._currentIndex, textEl)
      this._currentTextEl.classList.add(style.exit);
      this._currentTextEl.setAttribute("aria-hidden", "true");
      setTimeout(() => {
        if (
          this._currentTextEl &&
          this._innerWrapper?.contains(this._currentTextEl)
        ) {
          this._innerWrapper.removeChild(this._currentTextEl);
        }
        if (withAnimation) textEl.classList.remove(style.enter);
        this._currentTextEl = textEl;
      }, this._animationDuration);
    } else {
      this._currentTextEl = textEl;
    }
  }

  private _calcWidth(textEl: HTMLDivElement) {
    const width = textEl.scrollWidth;
    this._innerWrapper.style.setProperty(
      "width",
      `${width}px`
    );
  }

  private _next() {
    this._currentIndex = (this._currentIndex + 1) % this._texts.length;
    if (this._currentIndex === this._texts.length - 1) {
      this._emit(EventType.reachEnd)
      if (!this._loop) {
        this._emit('stop')
        this._cleanUp();
      } else {
        this._startTimer(); //start the timer again
      }
    } else {
      this._startTimer(); //start the timer again
    }
    this._showText(this._texts[this._currentIndex]);
  }

  private _startTimer() {
    this._cleanUp(); //clear the timer
    this._timer = setTimeout(() => {
      this._next();
    }, this._intervalTime);
  }

  private _cleanUp() {
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  }

  /**
   * @description: Start the scrolling text
   * @returns {void}
   */

  start(): void {
    if (!this._timer && this._container?.innerHTML) {
      this._startTimer();
      this._emit(EventType.start)
    }
  }

  /**
   * @description: Pause the scrolling text
   * @returns {void}
   */

  pause(): void {
    this._cleanUp(); //clear the timer
    this._emit(EventType.pause, this._currentIndex)
  }

  /**
   * @description: Stop the scrolling text and move to the first text
   * @returns {void}
   */

  stop(): void {
    this._cleanUp();
    if (this._currentIndex) {
      this._currentIndex = 0;
      this._showText(this._texts[this._currentIndex]);
    }
    this._emit(EventType.stop)
  }

  /**
   * @description: Dispose the scrolling text and remove the container
   * @returns {void}
   */

  dispose(): void {
    this._cleanUp();
    this._container.innerHTML = "";
    this._currentTextEl = null;
  }

  /**
   * @description: Get the version of the package
   * @returns {string}
   */

  static get version(): string {
    return "__VERSION__";
  }
}

export default ScrollingText;
