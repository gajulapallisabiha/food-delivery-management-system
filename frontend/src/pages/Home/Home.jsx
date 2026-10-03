import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">

      <Navbar />

      {/* Hero Section */}
      <section className="home-hero-section">
        <Header />
      </section>

      {/* Explore Menu */}
      <section className="home-explore-section">
        <ExploreMenu />
      </section>

      {/* Food Display */}
      <section className="home-food-section">
        <FoodDisplay />
      </section>

      {/* Mobile App */}
      <section id="mobile-app" className="mobile-app-section">

        <div className="mobile-app-content">

          <div className="mobile-app-icon">
            📱
          </div>

          <p className="section-small-title">
            ORDER ANYTIME, ANYWHERE
          </p>

          <h2>
            Your favourite food,
            <span> just a tap away.</span>
          </h2>

          <p className="mobile-app-description">
            Enjoy delicious meals, quick ordering and easy delivery.
            Our food ordering platform makes your favourite food
            available whenever you need it.
          </p>

          <div className="app-buttons">

            <button>
              ▶ Google Play
            </button>

            <button>
               App Store
            </button>

          </div>

        </div>

      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">

        <div className="contact-card">

          <div className="contact-heading">

            <p className="section-small-title">
              WE ARE HERE TO HELP
            </p>

            <h2>
              Contact <span>Us</span>
            </h2>

            <p>
              Have a question about your order?
              Our support team is always ready to help.
            </p>

          </div>

          <div className="contact-details">

            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>support@fooddelivery.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Location</h3>
                <p>Bengaluru, Karnataka</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="home-footer">

        <div className="footer-logo">
          🍴 Food Delivery
        </div>

        <p>
          Delicious food delivered to your doorstep.
        </p>

        <div className="footer-line"></div>

        <p className="copyright">
          © 2026 Food Delivery System. All rights reserved.
        </p>

      </footer>

    </div>
  );
};

export default Home;