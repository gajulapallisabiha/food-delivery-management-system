import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { StoreContext } from "../../context/StoreContext";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();

  const { getTotalCartAmount, setCartItems } =
    useContext(StoreContext);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.address ||
      !formData.city
    ) {
      alert("Please fill all delivery details.");
      return;
    }

    const subtotal = getTotalCartAmount();
    const totalAmount = subtotal + 40;

    try {
      setLoading(true);

      console.log("Sending order:", {
        ...formData,
        totalAmount
      });

      const response = await axios.post(
        "http://localhost:5000/api/orders",
        {
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          totalAmount: totalAmount
        }
      );

      console.log("Backend response:", response.data);

      alert("Order placed successfully! 🎉");

      setCartItems({});

      navigate("/my-orders");

    } catch (error) {
      console.error("ORDER ERROR:", error);

      alert(
        "Order could not be placed. Please make sure the backend is running."
      );

    } finally {
      setLoading(false);
    }
  };

  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal > 0 ? 40 : 0;
  const total = subtotal + deliveryFee;

  return (
    <>
      <Navbar />

      <div className="checkout-page">

        <div className="checkout-left">

          <h1>Checkout</h1>

          <p className="checkout-subtitle">
            Enter your delivery details to place your order.
          </p>

          <form onSubmit={handleSubmit}>

            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />

            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />

            <label>Delivery Address</label>

            <textarea
              name="address"
              placeholder="Enter your delivery address"
              value={formData.address}
              onChange={handleChange}
            />

            <label>City</label>

            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Placing Order..." : "Place Order"}
            </button>

          </form>
        </div>

        <div className="checkout-right">

          <h2>Order Summary</h2>

          <div className="checkout-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="checkout-row">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee}</span>
          </div>

          <hr />

          <div className="checkout-row checkout-total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <div className="secure-box">
            🔒

            <div>
              <strong>Safe & Secure</strong>

              <p>
                Your order details are protected.
              </p>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default Checkout;