"use client";
import React from "react";
import ScrollingText from "web-scrolling-text/react";

const Default = () => {
  return (
    <>
      <div>
        <h1>Default Animationn</h1>
        <div className="search">
          You can Search For
          <ScrollingText>
            {["Ice Age", "Spider Man"]}
          </ScrollingText>
        </div>
      </div>
      <div>
        <h1>Default with Whole text</h1>
        <div className="search">
          <ScrollingText>
            <>You Can Search For Ice Age</>
            <>You Can Search For Spider Man</>
          </ScrollingText>
        </div>
      </div>
      <div>
        <h1>Default With Hero Text</h1>
        <div className="hero">
        Investing & Trading
        Platform for
          <ScrollingText>
            <div className="first">Equity</div>
            <div className="second">Future</div>
            <div className="third">Commodity</div>
            <div className="fourth">NFO</div>
          </ScrollingText>
        </div>
      </div>
    </>
  );
};

export default Default;
