const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

const foods = [
  { id: "1", name: "Margherita Pizza", price: 249, category: "Pizza" },
  { id: "2", name: "Farmhouse Pizza", price: 299, category: "Pizza" },
  { id: "3", name: "Paneer Pizza", price: 289, category: "Pizza" },
  { id: "4", name: "Veggie Pizza", price: 269, category: "Pizza" },
  { id: "5", name: "Cheese Burst Pizza", price: 329, category: "Pizza" },
  { id: "6", name: "Mexican Pizza", price: 309, category: "Pizza" },
  { id: "7", name: "Corn Cheese Pizza", price: 279, category: "Pizza" },

  { id: "8", name: "Classic Veg Burger", price: 149, category: "Burger" },
  { id: "9", name: "Cheese Burger", price: 179, category: "Burger" },
  { id: "10", name: "Paneer Burger", price: 189, category: "Burger" },
  { id: "11", name: "Crispy Veg Burger", price: 169, category: "Burger" },
  { id: "12", name: "Double Cheese Burger", price: 219, category: "Burger" },
  { id: "13", name: "Spicy Mexican Burger", price: 199, category: "Burger" },
  { id: "14", name: "Mushroom Burger", price: 189, category: "Burger" },

  { id: "15", name: "White Sauce Pasta", price: 199, category: "Pasta" },
  { id: "16", name: "Red Sauce Pasta", price: 189, category: "Pasta" },
  { id: "17", name: "Alfredo Pasta", price: 229, category: "Pasta" },
  { id: "18", name: "Pesto Pasta", price: 219, category: "Pasta" },
  { id: "19", name: "Arrabbiata Pasta", price: 209, category: "Pasta" },
  { id: "20", name: "Cheesy Penne", price: 219, category: "Pasta" },

  { id: "21", name: "Veg Hakka Noodles", price: 179, category: "Noodles" },
  { id: "22", name: "Schezwan Noodles", price: 189, category: "Noodles" },
  { id: "23", name: "Singapore Noodles", price: 199, category: "Noodles" },
  { id: "24", name: "Chilli Garlic Noodles", price: 189, category: "Noodles" },
  { id: "25", name: "Paneer Noodles", price: 209, category: "Noodles" },
  { id: "26", name: "Manchurian Noodles", price: 199, category: "Noodles" },

  { id: "27", name: "Caesar Salad", price: 169, category: "Salad" },
  { id: "28", name: "Greek Salad", price: 179, category: "Salad" },
  { id: "29", name: "Fresh Veg Salad", price: 139, category: "Salad" },
  { id: "30", name: "Corn Salad", price: 149, category: "Salad" },
  { id: "31", name: "Paneer Salad", price: 189, category: "Salad" },

  { id: "32", name: "Chocolate Cake", price: 229, category: "Cake" },
  { id: "33", name: "Red Velvet Cake", price: 249, category: "Cake" },
  { id: "34", name: "Black Forest Cake", price: 239, category: "Cake" },
  { id: "35", name: "Vanilla Cake", price: 199, category: "Cake" },
  { id: "36", name: "Strawberry Cake", price: 249, category: "Cake" },

  { id: "37", name: "Veg Sandwich", price: 129, category: "Sandwich" },
  { id: "38", name: "Cheese Sandwich", price: 159, category: "Sandwich" },
  { id: "39", name: "Grilled Sandwich", price: 169, category: "Sandwich" },
  { id: "40", name: "Paneer Sandwich", price: 189, category: "Sandwich" },

  { id: "41", name: "Fresh Orange Juice", price: 99, category: "Juice" },
  { id: "42", name: "Mango Juice", price: 109, category: "Juice" },
  { id: "43", name: "Watermelon Juice", price: 89, category: "Juice" },
  { id: "44", name: "Pineapple Juice", price: 109, category: "Juice" },
  { id: "45", name: "Apple Juice", price: 119, category: "Juice" },
  { id: "46", name: "Pomegranate Juice", price: 129, category: "Juice" },
  { id: "47", name: "Mosambi Juice", price: 99, category: "Juice" },
  { id: "48", name: "Mixed Fruit Juice", price: 129, category: "Juice" }
];

let orders = [];

app.get("/", (req, res) => {
  res.send("Food Delivery Backend is running!");
});

app.get("/api/foods", (req, res) => {
  res.json(foods);
});

app.get("/api/foods/:id", (req, res) => {
  const food = foods.find((item) => item.id === req.params.id);

  if (!food) {
    return res.status(404).json({
      message: "Food item not found"
    });
  }

  res.json(food);
});

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

app.get("/api/orders", (req, res) => {
  res.json(orders);
});

app.get("/api/orders/:id", (req, res) => {
  const order = orders.find((item) => item.id === req.params.id);

  if (!order) {
    return res.status(404).json({
      message: "Order not found"
    });
  }

  res.json(order);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

