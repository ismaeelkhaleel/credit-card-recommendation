import React, { useEffect, useState } from "react";
import CardList from "./components/CardList";
import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("");
  const [displayedCategory, setDisplayedCategory] = useState(""); // 👈 new
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleSearch = async () => {
    if (!selected) return;
    const res = await fetch(`http://localhost:5000/api/cards/${selected}`);
    const data = await res.json();
    setCards(data);
    setDisplayedCategory(selected); // 👈 update only when button clicked
  };

  return (
    <div className="app-container">
      <h1>Credit Card Recommendation System</h1>

      <div className="controls">
        <select onChange={(e) => setSelected(e.target.value)} value={selected}>
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button onClick={handleSearch}>Show Cards</button>
      </div>

      {displayedCategory ? (
        <div>
          <h2>Showing results for: {displayedCategory}</h2>
          <CardList cards={cards} />
        </div>
      ) : (
        <h2>Please select a category to see recommendations.</h2>
      )}
    </div>
  );
}

export default App;
