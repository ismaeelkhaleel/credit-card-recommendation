import React from "react";
import "../App.css";

function CardList({ cards }) {
  if (!cards.length) {
    return <p className="no-results">No cards found.</p>;
  }

  return (
    <div className="card-list">
      {cards.map(card => (
        <div key={card.id} className="card">
          <h2>{card.cardName}</h2>
          <p><strong>Categories:</strong> {card.categories.join(", ")}</p>
          <p><strong>Benefits:</strong> {card.benefits}</p>
        </div>
      ))}
    </div>
  );
}

export default CardList;
