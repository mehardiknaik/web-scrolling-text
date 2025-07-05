import style from "./flip.module.css";

/**
 * Flip animation for web-scrolling-text.
 * This animation makes the text flip in and out of view.
 * usage:
 * ```jsx
 * import flip from "web-scrolling-text/animation/flip";
 * <ScrollingText options={{
 *  ...flip,
 * }}>
 *   {["Hello", "World"]}
 * </ScrollingText>
 * ```
 * @module web-scrolling-text/animation/flip
 * @see {@link https://unpkg.com/web-scrolling-text/dist/animation/flip.min.js}
 *
 * usage in html/vanilla js:
 *
 * ```html
 * <script src="https://unpkg.com/web-scrolling-text/dist/animation/flip.min.js"></script>
 * <script>
 *  const scroller = new ScrollingText(element, ["Hello", "World"], {
 *   ...ScrollingTextAnimation.flip,
 * });
 * scroller.start();
 * </script>
 * ```
 */
export default {
  enterAnimation: style.in,
  exitAnimation: style.out,
};
