"use client";
import React from "react";
import ScrollingText from "web-scrolling-text/react";
import x from "./style.module.css";

const Scale = () => {
  return (
    <>
      <div>
        <h1>Scale</h1>
        <div className="search">
          You can Search For
          <ScrollingText
            options={{
              enterAnimation: x.in,
              exitAnimation: x.out,
            }}
          >
            {["Electronics", "Clothes", "Furniture", "Grocery", "Books"]}
          </ScrollingText>
        </div>
      </div>
      <div>
        <h1>Scale with Whole text</h1>
        <div className="search">
          <ScrollingText
            options={{
              enterAnimation: x.in,
              exitAnimation: x.out,
            }}
          >
            <>You Can Search For Electronics</>
            <>You Can Search For Clothes</>
            <>You Can Search For Furniture</>
            <>You Can Search For Grocery</>
            <>You Can Search For Books</>
          </ScrollingText>
        </div>
      </div>
      <div>
        <h1>Scale With Hero Text</h1>
        <div className="hero">
          Login With
          <ScrollingText
            options={{
              enterAnimation: x.in,
              exitAnimation: x.out,
            }}
          >
            <div className="third">Google</div>
            <div className="second">Email Id</div>
            <div className="fourth">Facebook</div>
            <div className="first">Mobile Number</div>
          </ScrollingText>
        </div>
      </div>
    </>
  );
};

export default Scale;
