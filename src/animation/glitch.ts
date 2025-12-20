import style from "./glitch.module.css";

/**
 * Glitch animation for web-scrolling-text.
 * This animation creates a digital glitch effect for a cyber-punk style entrance and exit.
 * usage:
 * ```jsx
 * import glitch from "web-scrolling-text/animation/glitch";
 * <ScrollingText options={{
 *   ...glitch,
 * }}>
 *   {["Hello", "World"]}
 * </ScrollingText>
 * ```
 * @module web-scrolling-text/animation/glitch
 * @see {@link https://unpkg.com/web-scrolling-text/dist/animation/glitch.min.js}
 *
 * usage in html/vanilla js:
 * ```html
 * <script src="https://unpkg.com/web-scrolling-text/dist/animation/glitch.min.js"></script>
 * <script>
 *   const scroller = new ScrollingText(element, ["Hello", "World"], {
 *    ...ScrollingTextAnimation.glitch,
 *  });
 *  scroller.start();
 * </script>
 * ```
 */
export default {
    enterAnimation: style.in,
    exitAnimation: style.out,
};
