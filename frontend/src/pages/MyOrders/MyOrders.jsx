import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import OrderStatus from "../../components/OrderStatus/OrderStatus";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/orders")
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="app">
        <h1 style={{ marginTop: "50px" }}>My Orders</h1>

        <p style={{ marginTop: "10px", color: "#777" }}>
          Track your food orders and check their current status.
        </p>

        {loading ? (
          <p style={{ marginTop: "30px" }}>
            Loading your orders...
          </p>
        ) : orders.length === 0 ? (
          <div style={{ marginTop: "40px" }}>
            <h2>No orders yet 🛒</h2>

            <p style={{ marginTop: "10px", color: "#777" }}>
              Place an order to see it here.
            </p>
          </div>
        ) : (
          <>
            {orders.map((order) => (
              <div
                key={order.id}
                style={{
                  marginTop: "30px",
                  padding: "25px",
                  borderRadius: "15px",
                  background: "#fff",
                  boxShadow: "0 3px 15px rgba(0,0,0,0.08)"
                }}
              >
                <h2>Order #{order.id}</h2>

                <p style={{ marginTop: "12px" }}>
                  <strong>Name:</strong> {order.name}
                </p>

                <p style={{ marginTop: "8px" }}>
                  <strong>Phone:</strong> {order.phone}
                </p>

                <p style={{ marginTop: "8px" }}>
                  <strong>Delivery Address:</strong>{" "}
                  {order.address}, {order.city}
                </p>

                <p style={{ marginTop: "8px" }}>
                  <strong>Total Amount:</strong> ₹{order.totalAmount}
                </p>

                <p
                  style={{
                    marginTop: "8px",
                    color: "tomato",
                    fontWeight: "bold"
                  }}
                >
                  Status: {order.status}
                </p>

                <OrderStatus status={order.status} />
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default MyOrders;