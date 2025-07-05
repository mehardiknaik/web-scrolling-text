import style from "./fade.module.css";

/**
 * Fade animation for web-scrolling-text.
 * This animation makes the text fade in and out of view.
 * usage:
 * ```jsx
 * import fade from "web-scrolling-text/animation/fade";
 * <ScrollingText options={{
 *   ...fade,
 * }}>
 *   {["Hello", "World"]}
 * </ScrollingText>
 * ```
 * @module web-scrolling-text/animation/fade
 * @see {@link https://unpkg.com/web-scrolling-text/dist/animation/fade.min.js}
 * 
 * usage in html/vanilla js:
 * ```html
 * <script src="https://unpkg.com/web-scrolling-text/dist/animation/fade.min.js"></script>
 * <script>
 *   const scroller = new ScrollingText(element, ["Hello", "World"], {
 *    ...ScrollingTextAnimation.fade,
 *  });
 *  scroller.start();
 * </script>
 * ```
 */

export default {
  enterAnimation: style.in,
  exitAnimation: style.out,
};
