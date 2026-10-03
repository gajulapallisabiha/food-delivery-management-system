import React, { Component } from "react";
import "./OrderStatus.css";

class OrderStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      status: "Order Placed"
    };
  }

  componentDidMount() {
    this.statusTimer = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.step >= 4) {
          clearInterval(this.statusTimer);

          return prevState;
        }

        const nextStep = prevState.step + 1;

        const statuses = {
          1: "Order Placed",
          2: "Preparing Your Food",
          3: "Out for Delivery",
          4: "Delivered"
        };

        return {
          step: nextStep,
          status: statuses[nextStep]
        };
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.statusTimer);
  }

  render() {
    const { step, status } = this.state;

    const steps = [
      {
        number: 1,
        icon: "🛒",
        title: "Order Placed",
        text: "We've received your order"
      },
      {
        number: 2,
        icon: "👨‍🍳",
        title: "Preparing",
        text: "Your food is being prepared"
      },
      {
        number: 3,
        icon: "🛵",
        title: "Out for Delivery",
        text: "Your order is on the way"
      },
      {
        number: 4,
        icon: "🎉",
        title: "Delivered",
        text: "Enjoy your delicious meal!"
      }
    ];

    return (
      <div className="order-status-card">

        <div className="order-top">

          <div>
            <p className="order-label">ORDER TRACKING</p>

            <h2>Track Your Order</h2>

            <p className="order-subtitle">
              Follow your food from our kitchen to your doorstep.
            </p>
          </div>

          <div className="delivery-time">
            <span>🕒</span>

            <div>
              <small>Estimated delivery</small>

              <strong>
                {step === 4 ? "Delivered" : "25–35 min"}
              </strong>
            </div>
          </div>

        </div>

        <div className="current-status-box">

          <div className="status-icon">
            🍽️
          </div>

          <div>
            <span>Current Status</span>

            <h3>{status}</h3>
          </div>

        </div>

        <div className="timeline">

          <div className="timeline-line"></div>

          {steps.map((item) => (

            <div
              className={`timeline-step ${
                step >= item.number ? "completed" : ""
              } ${
                step === item.number ? "current" : ""
              }`}
              key={item.number}
            >

              <div className="step-circle">

                {step > item.number
                  ? "✓"
                  : item.icon}

              </div>

              <div className="step-content">

                <h4>{item.title}</h4>

                <p>{item.text}</p>

              </div>

            </div>

          ))}

        </div>

        <div className="order-bottom">

          <div className="support-text">

            <span>💬</span>

            <div>
              <strong>Need help?</strong>

              <p>
                Contact our support team
              </p>
            </div>

          </div>

          <div className="automatic-status">
            {step === 4
              ? "✓ Order Delivered"
              : "Status updating automatically..."}
          </div>

        </div>

      </div>
    );
  }
}

export default OrderStatus;