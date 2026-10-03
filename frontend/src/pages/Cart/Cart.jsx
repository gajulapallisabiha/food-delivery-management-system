import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    food_list,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  } = useContext(StoreContext);

  const totalAmount = getTotalCartAmount();

  return (
    <>
      <Navbar />

      <div className="cart-page">
        <h1>Your Cart</h1>

        <div className="cart-items">
          {food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div className="cart-item" key={item._id}>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />

                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>
                  </div>

                  <div className="cart-quantity">
                    <button
                      onClick={() => removeFromCart(item._id)}
                    >
                      −
                    </button>

                    <span>{cartItems[item._id]}</span>

                    <button
                      onClick={() => addToCart(item._id)}
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-item-total">
                    ₹{item.price * cartItems[item._id]}
                  </div>

                </div>
              );
            }

            return null;
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="cart-summary">

            <h2>Cart Total</h2>

            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>₹{totalAmount}</span>
            </div>

            <div className="cart-summary-row">
              <span>Delivery Fee</span>
              <span>₹40</span>
            </div>

            <hr />

            <div className="cart-summary-row total">
              <span>Total</span>
              <span>₹{totalAmount + 40}</span>
            </div>

            <button
              className="checkout-button"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>

          </div>
        ) : (
          <div className="empty-cart">

            <h2>Your cart is empty 🛒</h2>

            <p>
              Add some delicious food items from the menu.
            </p>

            <button
              className="checkout-button"
              onClick={() => navigate("/menu")}
            >
              Browse Menu
            </button>

          </div>
        )}
      </div>
    </>
  );
};

export default Cart;