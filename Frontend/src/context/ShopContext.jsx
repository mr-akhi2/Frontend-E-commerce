import React, { createContext, useEffect, useState } from "react";
// import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let Cart = {};
  for (let index = 1; index <= 300; index++) {
    Cart[index] = 0;
  }
  return Cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAll_product] = useState([]);
  const [CartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch("https://frontend-e-commerce-mdgv.onrender.com/allproducts")
      .then((resp) => resp.json())
      .then((data) => {
        setAll_product(data.data);

        // console.log(data.data);
      });

    if (localStorage.getItem("auth-token")) {
      fetch("https://frontend-e-commerce-mdgv.onrender.com/getcart", {
        method: "POST",
        headers: {
          Accept: "application/json",

          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/form-data",
        },
        body: "",
        // here no data is send to the server so bosy is null
      })
        .then((resp) => resp.json())
        .then((data) => {
          setCartItems(data);
        });
    }
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // this is for the every user can save their add product
    if (localStorage.getItem("auth-token")) {
      fetch("https://frontend-e-commerce-mdgv.onrender.com/addtocart", {
        method: "post",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item: itemId }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("https://frontend-e-commerce-mdgv.onrender.com/removefromcart", {
        method: "post",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item: itemId }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  //  total amount

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in CartItems) {
      if (CartItems[item] > 0) {
        let iteminfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += iteminfo.new_price * CartItems[item];
      }
    }
    return totalAmount;
  };
  // totla items

  const getTotalItems = () => {
    let totalItems = 0;
    for (const item in CartItems) {
      if (CartItems[item] > 0) {
        totalItems += CartItems[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    all_product,
    CartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
