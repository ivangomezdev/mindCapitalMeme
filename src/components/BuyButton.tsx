"use client"
import { useState } from "react";

import "./buyButton.css";

export default function SolanaButton() {
  const [showCoins, setShowCoins] = useState(false);

  const coinPositions = [
     { x: 50, y: 0 }, { x: -50, y: 0 },
    { x: 0, y: 50 }, { x: 0, y: -50 }, { x: 35, y: 35 },
    { x: -35, y: 35 }, { x: 35, y: -35 }, { x: -35, y: -35 },
  ];

  return (
    <div className="button__container">
      <button
        className="button"
        onMouseEnter={() => setShowCoins(true)}
        onMouseLeave={() => setShowCoins(false)}
      >
        BUY $MCAPITAL
      </button>

      {showCoins &&
        coinPositions.map((coin, index) => (
          <div
            key={index}
            className="coin"
            style={{
              transform: showCoins ? `translate(${coin.x}px, ${coin.y}px)` : "translate(0, 0)",
              transition: "transform 0.3s ease-out"
            }}
          >
        
          </div>
        ))}
    </div>
  );
}
