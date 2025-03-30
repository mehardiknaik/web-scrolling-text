"use client";
import React from "react";
import ScrollingText from "web-scrolling-text/react";
import x from "./style.module.css";

const Fadein = () => {
  return (
    <>
      <div>
        <h1>Fade In</h1>
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
        <h1>Fade In with Whole text</h1>
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
        <h1>Fade In With Hero Text</h1>
        <div className="hero">
          Login With
          <ScrollingText
            options={{
              enterAnimation: x.in,
              exitAnimation: x.out,
            }}
          >
            <div className="fourth">Facebook</div>
            <div className="first">Mobile Number</div>
            <div className="third">Google</div>
            <div className="second">Email Id</div>
          </ScrollingText>
        </div>
      </div>
    </>
  );
};

export default Fadein;
