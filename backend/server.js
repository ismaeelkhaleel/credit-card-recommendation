const express = require("express");
const cors = require("cors");
const cards = require("./data/cards");

const app = express();
app.use(cors());

// ✅ Get all unique categories
app.get("/api/categories", (req, res) => {
  const categories = [...new Set(cards.flatMap(card => card.categories))];
  res.json(categories);
});

// ✅ Get cards by category
app.get("/api/cards/:category", (req, res) => {
  const { category } = req.params;
  const results = cards.filter(card =>
    card.categories.map(c => c.toLowerCase()).includes(category.toLowerCase())
  );
  res.json(results);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
