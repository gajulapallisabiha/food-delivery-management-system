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
      Delivered: 3,
    };

    return statusMap[status] !== undefined ? statusMap[status] : 0;
  }

  render() {
    const currentStatus = this.getStatusIndex();

    const statuses = [
      "Order Placed",
      "Preparing Food",
      "Out for Delivery",
      "Delivered",
    ];

    return (
      <div className="order-status">
        <h3>Order Tracking</h3>

        <div className="timeline">
          {statuses.map((status, index) => {
            const completed = index <= currentStatus;
            const current = index === currentStatus;

            return (
              <div
                className={`timeline-item ${
                  completed ? "completed" : ""
                } ${current ? "current" : ""}`}
                key={status}
              >
                <div className="timeline-icon">
                  {completed ? "✓" : index + 1}
                </div>

                <div className="timeline-content">
                  <strong>{status}</strong>

                  {current && (
                    <span className="current-label">
                      Current Status
                    </span>
                  )}
                </div>

                {index < statuses.length - 1 && (
                  <div
                    className={`timeline-line ${
                      index < currentStatus ? "completed-line" : ""
                    }`}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default OrderStatus;