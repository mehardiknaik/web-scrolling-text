import ScrollingText from "../core/scrolling";
import { OptionsType, TextType } from "../core/types";

class DummyHTMLElement { };

const ClassToExtend =
    (typeof window === 'undefined' || typeof HTMLElement === 'undefined'
        ? DummyHTMLElement
        : HTMLElement) as typeof HTMLElement;

/**
 * @description: Web Component for ScrollingText
 * @extends HTMLElement
 * @example
 * <scrolling-text
 *   interval="3000"
 *   animation-duration="1000"
 *   loop="true"
 *   auto-start="true"
 * >
 *   <div>First text content</div>
 *   <div>Second text content</div>
 *   <div>Third text content</div>
 * </scrolling-text>
 */
class ScrollingTextElement extends ClassToExtend {
    private _scrollingText: ScrollingText | null = null;
    private _originalChildren: Element[] = [];

    static get observedAttributes() {
        return [
            "interval",
            "animation-duration",
            "enter-animation",
            "exit-animation",
            "loop",
            "auto-start",
        ];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        // Store original children before modifying DOM
        this._originalChildren = Array.from(this.children);

        this._initialize();
    }

    disconnectedCallback() {
        this._scrollingText?.dispose();
        this._scrollingText = null;
    }

    attributeChangedCallback(
        name: string,
        oldValue: string | null,
        newValue: string | null
    ) {
        if (oldValue !== newValue && this.isConnected) {
            this._initialize();
        }
    }

    private _initialize() {
        // Dispose existing instance
        this._scrollingText?.dispose();

        // Get texts from child elements
        const texts: TextType[] = this._originalChildren.map(
            (child) => child.innerHTML
        );

        if (texts.length === 0) {
            console.warn("No child elements provided for scrolling-text element");
            return;
        }

        // Build options from attributes
        const options: OptionsType = {};

        const interval = this.getAttribute("interval");
        if (interval) options.interval = parseInt(interval, 10);

        const animationDuration = this.getAttribute("animation-duration");
        if (animationDuration)
            options.animationDuration = parseInt(animationDuration, 10);

        const enterAnimation = this.getAttribute("enter-animation");
        if (enterAnimation) options.enterAnimation = enterAnimation;

        const exitAnimation = this.getAttribute("exit-animation");
        if (exitAnimation) options.exitAnimation = exitAnimation;

        const loop = this.getAttribute("loop");
        if (loop !== null) options.loop = loop !== "false";

        // Create ScrollingText instance
        this._scrollingText = new ScrollingText(this, texts, options);

        // Auto-start if specified
        const autoStart = this.getAttribute("auto-start");
        if (autoStart !== "false") {
            this._scrollingText.start();
        }
    }

    /**
     * @description: Start the scrolling text
     */
    start() {
        this._scrollingText?.start();
    }

    /**
     * @description: Pause the scrolling text
     */
    pause() {
        this._scrollingText?.pause();
    }

    /**
     * @description: Stop the scrolling text
     */
    stop() {
        this._scrollingText?.stop();
    }

    /**
     * @description: Dispose the scrolling text
     */
    dispose() {
        this._scrollingText?.dispose();
    }
}

const register = () => {
    if (typeof window === 'undefined') return;
    if (!customElements.get("scrolling-text")) {
        customElements.define("scrolling-text", ScrollingTextElement);
    }
}


export { ScrollingTextElement, register };