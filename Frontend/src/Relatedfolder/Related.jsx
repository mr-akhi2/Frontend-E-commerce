import React from "react";
import "./related.css";
import data_product from "../assets/data";
import Item from "../components/item/item";

const Related = () => {
  return (
    <div className="related">
      <h1>Related Products</h1>
      <hr />
      <div className="related-items">
        {data_product.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Related;
