import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import "./Cartitems.css";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItem = () => {
  const { all_product, CartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>quantity</p>
        <p>Total</p>
        <p>remove</p>
      </div>
      <hr />
      {all_product.map((e, index) => {
        if (CartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main ">
                <img src={e.image} className="cartIcon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {CartItems[e.id]}
                </button>
                <p>${e.new_price * CartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
                <hr />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartItemsTotol">
          <h1>Cart Totals</h1>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className="cartitem-promocode">
          <p>If you have a promo code ,Enter it Here</p>
          <div className="promoBox">
            <input type="text" placeholder="PROMO CODE" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
