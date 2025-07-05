import style from "./scaleIn.module.css";

/**
 * Scale In animation for web-scrolling-text.
 * This animation makes the text scale in and out of view.
 * usage:
 * ```jsx
 * import scaleIn from "web-scrolling-text/animation/scaleIn";
 * <ScrollingText options={{
 *   ...scaleIn,
 * }}>
 *   {["Hello", "World"]}
 * </ScrollingText>
 * ```
 * @module web-scrolling-text/animation/scaleIn
 * @see {@link https://unpkg.com/web-scrolling-text/dist/animation/scaleIn.min.js}
 * 
 * usage in html/vanilla js:
 * ```html
 * <script src="https://unpkg.com/web-scrolling-text/dist/animation/scaleIn.min.js"></script>
 * <script>
 *   const scroller = new ScrollingText(element, ["Hello", "World"], {
 *    ...ScrollingTextAnimation.scaleIn,
 *  });
 *  scroller.start();
 * </script>
 * ```
 */
export default {
  enterAnimation: style.in,
  exitAnimation: style.out,
};