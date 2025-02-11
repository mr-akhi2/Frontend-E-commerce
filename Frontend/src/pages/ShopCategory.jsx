import React, { useContext } from "react";
import "./CSS/shopcategory.css";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../components/item/item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shop-image-banner" src={props.banner} />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12 </span>
          out of 36 Project
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} />
        </div>
      </div>

      <div className="shopcategory-product">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                className="all-item"
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
