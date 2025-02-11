import React, { useContext } from "react";
import "./productDisplay.css";
import start_dull_icon from "../../assets/star_dull_icon.png";
import star_icon from "../../assets/star_icon.png";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;

  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
        </div>
        <div className="productdisplayimage">
          <img className="productdisplay-main-image" src={product.image} />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-star">
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={start_dull_icon} />
        </div>
        <p>(122)</p>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-old-prices">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-new-prices">
            ${product.new_price}
          </div>
        </div>
        <div className="product-right-description">
          {" "}
          A lightWeght,ussually knitted ,pullover shirt,close-fitting and with a
          around neckline and short , worn as an wndershirt or outer garments
        </div>
        <div className="product-size">
          <h1>select size</h1>
          <div className="product-display-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXl</div>
          </div>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            Add TO CART
          </button>
          <p className="productdisplay-right-category">
            <span>Category :</span> Women , T-Shirt ,Crop Top
          </p>
          <p className="productdisplay-right-category">
            <span>Tags :</span> Modern , Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
