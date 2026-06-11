import { useEffect, useRef } from "react";
import { register } from 'web-scrolling-text/element';
import fadeAnim from 'web-scrolling-text/animation/fade';
import { ScrollingType } from "web-scrolling-text"
register();

const ElementComponent = () => {
    const ref = useRef<ScrollingType>(null)
    useEffect(() => {
        const onChange = (x: number, y: HTMLElement) => { console.log("change Element", x, y) }
        ref.current?.on("change", onChange)
        return () => {
            ref.current?.off("change", onChange)
        }
    }, [])
    return (
        <div className="container">
            <h1>ElementComponent</h1>
            <scrolling-text ref={ref}>
                <div>First Text</div>
                <div>Second Text</div>
                <div>Third Text</div>
            </scrolling-text>
            <h1>Fade Animation</h1>
            <scrolling-text enter-animation={fadeAnim.enterAnimation} exit-animation={fadeAnim.exitAnimation} >
                <div>First Text</div>
                <div>Second Text</div>
                <div>Third Text</div>
            </scrolling-text>
        </div>
    );
};

export default ElementComponent;
