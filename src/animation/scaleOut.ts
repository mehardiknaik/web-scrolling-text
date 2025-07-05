import style from "./scaleOut.module.css";

/**
 * Scale Out animation for web-scrolling-text.
 * This animation makes the text scale out of view.
 * usage:
 * ```jsx
 * import scaleOut from "web-scrolling-text/animation/scaleOut";
 * <ScrollingText options={{
 *   ...scaleOut,
 * }}>
 *   {["Hello", "World"]}
 * </ScrollingText>
 * ```
 * @module web-scrolling-text/animation/scaleOut
 * @see {@link https://unpkg.com/web-scrolling-text/dist/animation/scaleOut.min.js}
 *
 * usage in html/vanilla js:
 * ```html
 * <script src="https://unpkg.com/web-scrolling-text/dist/animation/scaleOut.min.js"></script>
 * <script>
 *   const scroller = new ScrollingText(element, ["Hello", "World"], {
 *    ...ScrollingTextAnimation.scaleOut,
 *  });
 *  scroller.start();
 * </script>
 * ```
 */
export default {
  enterAnimation: style.in,
  exitAnimation: style.out,
};