import React, { Component } from "react";
import "./OrderStatus.css";

class OrderStatus extends Component {
  getStatusIndex() {
    const status = this.props.status;

    const statusMap = {
      Placed: 0,
      "Order Placed": 0,
      Preparing: 1,
      "Preparing Food": 1,
      "Out for Delivery": 2,
      Delivered: 3
    };

    return statusMap[status] !== undefined ? statusMap[status] : 0;
  }

  render() {
    const currentStatus = this.getStatusIndex();

    const statuses = [
      "Order Placed",
      "Preparing Food",
      "Out for Delivery",
      "Delivered"
    ];

    return (
      <div className="order-status">
        <h3>Order Status</h3>

        <div className="status-timeline">
          {statuses.map((status, index) => (
            <div
              key={status}
              className={`status-step ${
                index <= currentStatus ? "active" : ""
              }`}
            >
              <span className="status-icon">
                {index <= currentStatus ? "✓" : index + 1}
              </span>

              <span>{status}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default OrderStatus;