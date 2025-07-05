import style from "./zoomInDown.module.css";

/**
 * Zoom In Down animation for web-scrolling-text.
 * This animation makes the text zoom in from the top and down into view.
 * usage:
 * ```jsx
 * import zoomInDown from "web-scrolling-text/animation/zoomInDown";
 * <ScrollingText options={{
 *   ...zoomInDown,
 * }}>
 *   {["Hello", "World"]}
 * </ScrollingText>
 * ```
 * @module web-scrolling-text/animation/zoomInDown
 * @see {@link https://unpkg.com/web-scrolling-text/dist/animation/zoomInDown.min.js}
 *
 * usage in html/vanilla js:
 * ```html
 * <script src="https://unpkg.com/web-scrolling-text/dist/animation/zoomInDown.min.js"></script>
 * <script>
 *   const scroller = new ScrollingText(element, ["Hello", "World"], {
 *    ...ScrollingTextAnimation.zoomInDown,
 *  });
 *  scroller.start();
 * </script>
 * ```
 */
export default {
  enterAnimation: style.in,
  exitAnimation: style.out,
};