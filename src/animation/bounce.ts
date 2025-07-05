import style from "./bounce.module.css";

/**
 * Bounce animation for web-scrolling-text.
 * This animation makes the text bounce in and out of view.
 * usage:
 * ```jsx
 * import bounce from "web-scrolling-text/animation/bounce";
 * <ScrollingText options={{
 *   ...bounce,
 * }}>
 *   {["Hello", "World"]}
 * </ScrollingText>
 * ```
 * @module web-scrolling-text/animation/bounce
 * @see {@link https://unpkg.com/web-scrolling-text/dist/animation/bounce.min.js}
 *
 * usage in html/vanilla js:
 * ```html
 * <script src="https://unpkg.com/web-scrolling-text/dist/animation/bounce.min.js"></script>
 * <script>
 *   const scroller = new ScrollingText(element, ["Hello", "World"], {
 *    ...ScrollingTextAnimation.bounce,
 *  });
 *  scroller.start();
 * </script>
 * ```
 */
export default {
  enterAnimation: style.in,
  exitAnimation: style.out,
};