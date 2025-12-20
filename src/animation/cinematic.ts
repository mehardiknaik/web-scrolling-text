import style from "./cinematic.module.css";

/**
 * Cinematic animation for web-scrolling-text.
 * This animation uses blur and scale effects for a premium entrance and exit.
 * usage:
 * ```jsx
 * import cinematic from "web-scrolling-text/animation/cinematic";
 * <ScrollingText options={{
 *   ...cinematic,
 * }}>
 *   {["Hello", "World"]}
 * </ScrollingText>
 * ```
 * @module web-scrolling-text/animation/cinematic
 * @see {@link https://unpkg.com/web-scrolling-text/dist/animation/cinematic.min.js}
 *
 * usage in html/vanilla js:
 * ```html
 * <script src="https://unpkg.com/web-scrolling-text/dist/animation/cinematic.min.js"></script>
 * <script>
 *   const scroller = new ScrollingText(element, ["Hello", "World"], {
 *    ...ScrollingTextAnimation.cinematic,
 *  });
 *  scroller.start();
 * </script>
 * ```
 */
export default {
    enterAnimation: style.in,
    exitAnimation: style.out,
};
