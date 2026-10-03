const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const foodItems = [
  {
    id: "1",
    name: "Margherita Pizza",
    price: 249,
    category: "Pizza"
  },
  {
    id: "2",
    name: "Veg Burger",
    price: 149,
    category: "Burger"
  },
  {
    id: "3",
    name: "Creamy Pasta",
    price: 199,
    category: "Pasta"
  },
  {
    id: "4",
    name: "Veg Noodles",
    price: 179,
    category: "Noodles"
  },
  {
    id: "5",
    name: "Veg Sandwich",
    price: 129,
    category: "Sandwich"
  },
  {
    id: "6",
    name: "Fresh Salad",
    price: 119,
    category: "Salad"
  },
  {
    id: "7",
    name: "Chocolate Cake",
    price: 229,
    category: "Cake"
  }
];

/* Temporary order storage */
let orders = [];

/* Home */
app.get("/", (req, res) => {
  res.send("Food Ordering API is running");
});

/* Get food items */
app.get("/api/foods", (req, res) => {
  res.json(foodItems);
});

/* Create order */
app.post("/api/orders", (req, res) => {
  const { name, phone, address, city, totalAmount } = req.body;

  if (!name || !phone || !address || !city || !totalAmount) {
    return res.status(400).json({
      message: "Please provide all order details"
    });
  }

  const newOrder = {
    id: Date.now().toString(),
    name,
    phone,
    address,
    city,
    totalAmount,
    status: "Order Placed",
    createdAt: new Date().toISOString()
  };

  orders.push(newOrder);

  res.status(201).json({
    message: "Order placed successfully",
    order: newOrder
  });
});

/* Get all orders */
app.get("/api/orders", (req, res) => {
  res.json(orders);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});