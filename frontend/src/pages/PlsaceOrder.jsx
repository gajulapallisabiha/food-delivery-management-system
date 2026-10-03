import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount, cartItems, food_list } =
    useContext(StoreContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!formData.address.trim()) {
      setError("Please enter your delivery address.");
      return;
    }

    if (!formData.city.trim()) {
      setError("Please enter your city.");
      return;
    }

    if (getTotalCartAmount() <= 0) {
      setError("Your cart is empty.");
      return;
    }

    const orderData = {
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      totalAmount: getTotalCartAmount(),
      status: "Placed",
      items: cartItems,
    };

    try {
      await axios.post(
        "http://localhost:5000/api/orders",
        orderData
      );

      alert("Order placed successfully!");

      navigate("/my-orders");
    } catch (error) {
      console.error("Error placing order:", error);

      setError("Unable to place order. Please try again.");
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "1100px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <h1>Place Your Order</h1>

        <p
          style={{
            color: "#777",
            marginTop: "8px",
            marginBottom: "30px",
          }}
        >
          Enter your delivery details to complete your order.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "650px",
            background: "#fff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <label>Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Phone Number</label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter 10-digit phone number"
              maxLength="10"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Delivery Address</label>

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your delivery address"
              rows="4"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                resize: "vertical",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>City</label>

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            />
          </div>

          {error && (
            <p
              style={{
                color: "red",
                marginBottom: "20px",
                fontWeight: "500",
              }}
            >
              {error}
            </p>
          )}

          <div
            style={{
              marginBottom: "20px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Total Amount: ₹{getTotalCartAmount()}
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              background: "tomato",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Place Order
          </button>
        </form>
      </div>
    </>
  );
};

export default PlaceOrder;