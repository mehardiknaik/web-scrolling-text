import React from "react";
import ScrollingText from "web-scrolling-text/react";
import fade from "web-scrolling-text/animation/fade"

const ReactComponent = () => {
    return (
        <div className="container">
            <h1>ReactComponent</h1>
            <ScrollingText>
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
