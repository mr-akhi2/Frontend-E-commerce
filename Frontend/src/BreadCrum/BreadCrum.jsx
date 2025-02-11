import React from "react";
import "./breadcrum.css";
import arrow_icon from "../assets/arrow.png";

const BreadCrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      Home <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} />
      {product.image}
      <img src={arrow_icon} />
      {product.name}
    </div>
  );
};

export default BreadCrum;
