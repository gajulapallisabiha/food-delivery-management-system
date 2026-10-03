import React, { Component } from "react";

class OrderStatus extends Component {
  render() {
    return (
      <div className="order-status">
        <h3>Order Status</h3>

        <div className="status-step active">
          ✓ Order Placed
        </div>

        <div className="status-step">
          ✓ Preparing Food
        </div>

        <div className="status-step">
          ✓ Out for Delivery
        </div>

        <div className="status-step">
          ✓ Delivered
        </div>
      </div>
    );
  }
}

export default OrderStatus;