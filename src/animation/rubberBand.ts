import style from "./rubberBand.module.css";

/**
 * RubberBand animation for web-scrolling-text.
 * This animation creates a playful elastic effect.
 * usage:
 * ```jsx
 * import rubberBand from "web-scrolling-text/animation/rubberBand";
 * <ScrollingText options={{
 *   ...rubberBand,
 * }}>
 *   {["Hello", "World"]}
 * </ScrollingText>
 * ```
 * @module web-scrolling-text/animation/rubberBand
 * @see {@link https://unpkg.com/web-scrolling-text/dist/animation/rubberBand.min.js}
 *
 * usage in html/vanilla js:
 * ```html
 * <script src="https://unpkg.com/web-scrolling-text/dist/animation/rubberBand.min.js"></script>
 * <script>
 *   const scroller = new ScrollingText(element, ["Hello", "World"], {
 *    ...ScrollingTextAnimation.rubberBand,
 *  });
 *  scroller.start();
 * </script>
 * ```
 */
export default {
    enterAnimation: style.in,
    exitAnimation: style.out,
};
