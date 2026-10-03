import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Navbar = () => {
  const { getTotalCartItems } = useContext(StoreContext);
  const location = useLocation();

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img
            src={assets.logo}
            alt="Foodie"
            className="navbar-logo"
          />

          <div className="brand-text">
            <h2>Food<span>ie</span></h2>
            <p>Fresh food · Fast delivery</p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="navbar-menu">

          <Link
            to="/"
            className={`nav-link ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/menu"
            className={`nav-link ${
              location.pathname === "/menu" ? "active" : ""
            }`}
          >
            Menu
          </Link>

          <Link
            to="/my-orders"
            className={`nav-link ${
              location.pathname === "/my-orders" ? "active" : ""
            }`}
          >
            My Orders
          </Link>

          <a href="/#mobile-app" className="nav-link">
            Mobile App
          </a>

          <a href="/#contact" className="nav-link">
            Contact
          </a>

        </div>

        {/* Right side */}
        <div className="navbar-actions">

          <Link to="/menu" className="action-button">
            <img src={assets.search_icon} alt="Search" />
          </Link>

          <Link to="/cart" className="action-button">
            <div className="cart-wrapper">
              <img src={assets.basket_icon} alt="Cart" />

              {getTotalCartItems() > 0 && (
                <span className="cart-count">
                  {getTotalCartItems()}
                </span>
              )}
            </div>
          </Link>

          <Link to="/login" className="signin-button">
            Sign In
            <span>→</span>
          </Link>

        </div>

      </nav>
    </header>
  );
};

export default Navbar;