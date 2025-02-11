import React from "react";
import "./Hero.css";
// import hand_icon from "../../assets/hand_icon.png";
import arrow from "../../assets/arrow.png";
import hero_image from "../../assets/hero_image.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h2>NEEW ARRIVES ONLY</h2>
          <div>
            <div className="hero-hand-icon">
              <p>new</p>
              {/* <img src={hand_icon} className="hand_img" /> */}
            </div>
            <p>collections</p>
            <p>Everyone</p>
          </div>
          <div className="hero-latest-btn">
            <div>Latest Collections</div>
            <img src={arrow} />
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} />
        </div>
      </div>
    </>
  );
};

export default Hero;
