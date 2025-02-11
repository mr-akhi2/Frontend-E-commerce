import React, { useContext, useRef, useState } from "react";
import "./navbar.css";
// import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import nav_dropdown from "../assets/dropdown_nav.png";
import { toast } from "react-toastify";
import nav_logo from "../assets/StyleSphere.jpg";

const Navbar = () => {
  const [navhr, setnavhr] = useState("shop");
  const { getTotalItems } = useContext(ShopContext);
  // console.log(getTotalItems);

  const navmenuref = useRef();

  const dropdown_toggle = (e) => {
    navmenuref.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  return (
    <div id="navbar">
      <div className="nav-logo">
        <img className="nav_logo" src={nav_logo} alt="img not found" />
        <pz>StyleSphere</pz>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
      />
      <ul ref={navmenuref} className="ulelements">
        <li onClick={() => setnavhr("shop")}>
          <Link to="/"> Shops </Link> {navhr === "shop" ? <hr /> : ""}
        </li>
        <li onClick={() => setnavhr("men")}>
          <Link to="/men"> men </Link>
          {navhr === "men" ? <hr /> : ""}
        </li>
        <li onClick={() => setnavhr("women")}>
          <Link to="/women"> women </Link> {navhr === "women" ? <hr /> : ""}
        </li>
        <li onClick={() => setnavhr("kids")}>
          <Link to="/kids"> kids </Link> {navhr === "kids" ? <hr /> : ""}
        </li>
      </ul>
      <div className="nav-login">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              toast.success("Logout Successfully");
              setTimeout(() => {
                window.location.replace("/");
              }, 1000);
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link to="cart">
          <img className="cart_icon" src={cart_icon} />
        </Link>
        <div id="count">{getTotalItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
