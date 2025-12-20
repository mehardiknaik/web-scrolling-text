import style from "./swing.module.css";

/**
 * Swing animation for web-scrolling-text.
 * This animation creates a swinging effect.
 * usage:
 * ```jsx
 * import swing from "web-scrolling-text/animation/swing";
 * <ScrollingText options={{
 *   ...swing,
 * }}>
 *   {["Hello", "World"]}
 * </ScrollingText>
 * ```
 * @module web-scrolling-text/animation/swing
 * @see {@link https://unpkg.com/web-scrolling-text/dist/animation/swing.min.js}
 *
 * usage in html/vanilla js:
 * ```html
 * <script src="https://unpkg.com/web-scrolling-text/dist/animation/swing.min.js"></script>
 * <script>
 *   const scroller = new ScrollingText(element, ["Hello", "World"], {
 *    ...ScrollingTextAnimation.swing,
 *  });
 *  scroller.start();
 * </script>
 * ```
 */
export default {
    enterAnimation: style.in,
    exitAnimation: style.out,
};
