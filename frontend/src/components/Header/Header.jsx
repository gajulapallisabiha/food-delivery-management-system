import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  const navigate = useNavigate();

  const handleViewMenu = () => {
    navigate("/menu");
  };

  return (
    <div className="header">

      <img
        src={assets.header_img}
        alt="Food"
        className="header-image"
      />

      <div className="header-content">

        <h1>Order your favourite food</h1>

        <p>
          Choose from a wide variety of delicious meals and
          get your favourite food delivered to your doorstep.
        </p>

        <button onClick={handleViewMenu}>
          View Menu
        </button>

      </div>

    </div>
  );
};

export default Header;