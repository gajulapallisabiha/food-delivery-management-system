import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Menu = () => {
  return (
    <>
      <Navbar />

      <div className="app">
        <h1 style={{ marginTop: "40px", marginBottom: "20px" }}>
          Our Menu
        </h1>

        <FoodDisplay />
      </div>
    </>
  );
};

export default Menu;