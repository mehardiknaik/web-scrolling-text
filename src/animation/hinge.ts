import style from "./hinge.module.css";
import "./hinge.css"

/**
 * Hinge animation for web-scrolling-text.
 * This animation makes the text hinge out of view.
 * usage:
 * ```jsx
 * import hinge from "web-scrolling-text/animation/hinge";
 * <ScrollingText options={{
 *   ...hinge,
 * }}>
 *  {["Hello", "World"]}
 * </ScrollingText>
 * ```
 * @module web-scrolling-text/animation/hinge
 * @see {@link https://unpkg.com/web-scrolling-text/dist/animation/hinge.min.js}
 * 
 * usage in html/vanilla js:
 * ```html
 * <script src="https://unpkg.com/web-scrolling-text/dist/animation/hinge.min.js"></script>
 * <script>
 *   const scroller = new ScrollingText(element, ["Hello", "World"], {
 *    ...ScrollingTextAnimation.hinge,
 *  });
 *  scroller.start();
 * </script>
 * ```
 * Note: This animation is only for exit animation,
 * you can use other or default animation for enter.
 */
export default {
  exitAnimation: style.out,
};
