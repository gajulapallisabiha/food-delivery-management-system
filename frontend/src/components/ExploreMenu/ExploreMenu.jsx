import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = () => {
  return (
    <div className="explore-menu">
      <h2>Explore our menu</h2>

      <p className="explore-menu-text">
        Choose from a variety of delicious food items and discover
        your favourite dishes.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div className="explore-menu-item" key={index}>
              <img src={item.menu_image} alt={item.menu_name} />

              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;