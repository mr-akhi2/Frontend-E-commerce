import React from "react";
import "./newsletter.css";

const NewaLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers on your email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewaLetter;
