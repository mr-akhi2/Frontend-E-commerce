import React from "react";
import "./item.css";
import { Link, useParams } from "react-router-dom";

const item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        {" "}
        <img onClick={window.scrollTo(0, 0)} src={props.image} />
      </Link>
      <p>{props.name}</p>
      <div className="items-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default item;
