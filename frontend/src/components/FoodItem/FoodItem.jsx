import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const {
    cartItems,
    addToCart,
    removeFromCart
  } = useContext(StoreContext);

  return (
    <div className="food-item">

      <div className="food-item-image-container">

        <img
          src={image}
          alt={name}
          className="food-item-image"
        />

        {cartItems[id] ? (
          <div className="food-item-counter">

            <button
              type="button"
              onClick={() => removeFromCart(id)}
            >
              −
            </button>

            <span>{cartItems[id]}</span>

            <button
              type="button"
              onClick={() => addToCart(id)}
            >
              +
            </button>

          </div>
        ) : (
          <button
            type="button"
            className="add-cart-button"
            onClick={() => addToCart(id)}
          >
            + Add
          </button>
        )}

      </div>

      <div className="food-item-info">

        <div className="food-item-name-rating">

          <h3>{name}</h3>

          <img
            src={assets.rating_starts}
            alt="Rating"
          />

        </div>

        <p className="food-item-description">
          {description}
        </p>

        <p className="food-item-price">
          ₹{price}
        </p>

      </div>

    </div>
  );
};

export default FoodItem;