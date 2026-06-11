import { useEffect, useRef } from "react";
import ScrollingText from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/fade"
import { ScrollingType } from "web-scrolling-text";

const ReactComponent = () => {
    const ref = useRef<ScrollingType>(null);

    // useEffect(() => {
    //     const onChange = (x: number, y: HTMLDivElement) => {
    //         console.log("change", x, y)
    //     }
    //     ref.current?.on("change", onChange)
    //     return () => {
    //         ref.current?.off("change", onChange)
    //     }
    // }, [])
    return (
        <div className="container">
            <h1>ReactComponent</h1>
            <button onClick={() => ref.current?.pause()}>Pause</button>
            <button onClick={() => ref.current?.start()}>Play</button>
            <button onClick={() => ref.current?.stop()}>Stop</button>

            <ScrollingText ref={ref} options={{
                onReachEnd: () => console.log("reched"),
                // onChange: console.log
                // onStart: () => console.log("start")
            }}>
                {["One", "Two", "Three"]}
            </ScrollingText>
            <h1>Fade Animation</h1>
            <ScrollingText options={{
                ...fade,
                interval: 2500,
                animationDuration: 800,
            }}>
                {["One", "Two", "Three"]}
            </ScrollingText>
        </div>
    );
};

export default ReactComponent;
