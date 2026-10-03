import logo from "./food_logo.jpg";
import header_img from "./restaurant food.webp";

import search_icon from "./search_icon.png";
import basket_icon from "./basket_icon.png";
import profile_icon from "./profile_icon.png";
import rating_starts from "./rating_icon.png";

import menu_1 from "./Menu_1.png";
import menu_2 from "./Menu_2.png";
import menu_3 from "./Menu_3.png";
import menu_4 from "./Menu_4.png";
import menu_5 from "./Menu_5.png";
import menu_6 from "./Menu_6.png";
import menu_7 from "./Menu_7.png";
import menu_8 from "./Menu_8.png";

import food_1 from "./food_1.png";
import food_2 from "./food_2.png";
import food_3 from "./food_3.png";
import food_4 from "./food_4.png";
import food_5 from "./food_5.png";
import food_6 from "./food_6.png";
import food_7 from "./food_7.png";

export const assets = {
  logo,
  header_img,
  search_icon,
  basket_icon,
  profile_icon,
  rating_starts,
  menu_1,
  menu_2,
  menu_3,
  menu_4,
  menu_5,
  menu_6,
  menu_7,
  menu_8,
  food_1,
  food_2,
  food_3,
  food_4,
  food_5,
  food_6,
  food_7
};

export const menu_list = [
  { menu_name: "Salad", menu_image: menu_1 },
  { menu_name: "Rolls", menu_image: menu_2 },
  { menu_name: "Desserts", menu_image: menu_3 },
  { menu_name: "Sandwich", menu_image: menu_4 },
  { menu_name: "Cake", menu_image: menu_5 },
  { menu_name: "Pure Veg", menu_image: menu_6 },
  { menu_name: "Pasta", menu_image: menu_7 },
  { menu_name: "Noodles", menu_image: menu_8 }
];

export const food_list = [
  {
    _id: "1",
    name: "Margherita Pizza",
    image: food_1,
    price: 249,
    description: "Fresh pizza with cheese and tomato.",
    category: "Pizza"
  },
  {
    _id: "2",
    name: "Veg Burger",
    image: food_2,
    price: 149,
    description: "Crispy vegetable burger with fresh vegetables.",
    category: "Burger"
  },
  {
    _id: "3",
    name: "Creamy Pasta",
    image: food_3,
    price: 199,
    description: "Delicious creamy pasta with herbs.",
    category: "Pasta"
  },
  {
    _id: "4",
    name: "Veg Noodles",
    image: food_4,
    price: 179,
    description: "Tasty noodles with fresh vegetables.",
    category: "Noodles"
  },
  {
    _id: "5",
    name: "Veg Sandwich",
    image: food_5,
    price: 129,
    description: "Fresh sandwich filled with vegetables.",
    category: "Sandwich"
  },
  {
    _id: "6",
    name: "Fresh Salad",
    image: food_6,
    price: 119,
    description: "Healthy salad made with fresh vegetables.",
    category: "Salad"
  },
  {
    _id: "7",
    name: "Chocolate Cake",
    image: food_7,
    price: 229,
    description: "Soft and delicious chocolate cake.",
    category: "Cake"
  }
];