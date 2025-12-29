import ScrollingText from "../core/scrolling";
import { OptionsType, TextType } from "../core/types";

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
class ScrollingTextElement extends HTMLElement {
    private _scrollingText: ScrollingText | null = null;
    private _container: HTMLDivElement;
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
        this._container = document.createElement("div");
        this._container.style.width = "100%";
        this._container.style.height = "100%";
    }

    connectedCallback() {
        // Store original children before modifying DOM
        this._originalChildren = Array.from(this.children);

        // Clear the element and add container
        this.innerHTML = "";
        this.appendChild(this._container);

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
        this._scrollingText = new ScrollingText(this._container, texts, options);

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

// Register the custom element
if (typeof window !== "undefined" && !customElements.get("scrolling-text")) {
    customElements.define("scrolling-text", ScrollingTextElement);
}
