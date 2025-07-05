import style from "./rotate.module.css";

/**
 * Rotate animation for web-scrolling-text.
 * This animation makes the text rotate in and out of view.
 * usage:
 * ```jsx
 * import rotate from "web-scrolling-text/animation/rotate";
 * <ScrollingText options={{
 *   ...rotate,
 * }}>
 *   {["Hello", "World"]}
 * </ScrollingText>
 * ```
 * @module web-scrolling-text/animation/rotate
 * @see {@link https://unpkg.com/web-scrolling-text/dist/animation/rotate.min.js}
 * 
 * usage in html/vanilla js:
 * ```html
 * <script src="https://unpkg.com/web-scrolling-text/dist/animation/rotate.min.js"></script>
 * <script>
 *   const scroller = new ScrollingText(element, ["Hello", "World"], {
 *    ...ScrollingTextAnimation.rotate,
 *  });
 *  scroller.start();
 * </script>
 * ```
 */
export default {
  enterAnimation: style.in,
  exitAnimation: style.out,
};
