import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { assets } from "../../assets/assets";

const FoodDisplay = () => {
  const [foodList, setFoodList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/foods")
      .then((response) => {
        setFoodList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching food data:", error);
      });
  }, []);

  const getFoodImage = (id) => {
    return assets[`food_${id}`];
  };

  const filteredFood = foodList.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="food-display">

      <h2>Top dishes near you</h2>

      <div className="food-search">
        <input
          type="text"
          placeholder="Search for food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="food-category-buttons">

        <button
          className={selectedCategory === "All" ? "active" : ""}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>

        <button
          className={selectedCategory === "Pizza" ? "active" : ""}
          onClick={() => setSelectedCategory("Pizza")}
        >
          Pizza
        </button>

        <button
          className={selectedCategory === "Burger" ? "active" : ""}
          onClick={() => setSelectedCategory("Burger")}
        >
          Burger
        </button>

        <button
          className={selectedCategory === "Pasta" ? "active" : ""}
          onClick={() => setSelectedCategory("Pasta")}
        >
          Pasta
        </button>

        <button
          className={selectedCategory === "Noodles" ? "active" : ""}
          onClick={() => setSelectedCategory("Noodles")}
        >
          Noodles
        </button>

        <button
          className={selectedCategory === "Salad" ? "active" : ""}
          onClick={() => setSelectedCategory("Salad")}
        >
          Salad
        </button>

        <button
          className={selectedCategory === "Cake" ? "active" : ""}
          onClick={() => setSelectedCategory("Cake")}
        >
          Cake
        </button>

        <button
          className={selectedCategory === "Sandwich" ? "active" : ""}
          onClick={() => setSelectedCategory("Sandwich")}
        >
          Sandwich
        </button>

        <button
          className={selectedCategory === "Juice" ? "active" : ""}
          onClick={() => setSelectedCategory("Juice")}
        >
          Juice
        </button>

      </div>

      <div className="food-display-list">

        {filteredFood.length > 0 ? (

          filteredFood.map((item) => (

            <FoodItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              description={`Delicious ${item.category.toLowerCase()} prepared with fresh ingredients.`}
              image={getFoodImage(item.id)}
            />

          ))

        ) : (

          <p className="no-food">
            No food items found.
          </p>

        )}

      </div>

    </div>
  );
};

export default FoodDisplay;
