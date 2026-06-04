import React from "react";
import { register } from 'web-scrolling-text/element';
import fadeAnim from 'web-scrolling-text/animation/fade';
register();

const ElementComponent = () => {
    return (
        <div className="container">
            <h1>ElementComponent</h1>
            <scrolling-text >
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
