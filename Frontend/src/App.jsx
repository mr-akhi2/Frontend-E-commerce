import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Footer from "./Footer/Footer";
import men_bannner from "./assets/banner_mens.png";
import banner_women from "./assets/banner_women.png";
import banner_kids_bannner from "./assets/banner_kids.png";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />

          <Route path="/shop" element={<Shop />} />
          <Route
            path="/kids"
            element={
              <ShopCategory banner={banner_kids_bannner} category="kids" />
            }
          />
          <Route
            path="/men"
            element={<ShopCategory banner={men_bannner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={banner_women} category="women" />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
