import React from "react";
import "../../styles/inputs/CircleButton.css";

const CircleButton = ({logs, text}) => {
  const handleChange = () => {
    if (logs.length !== 0) {
      if (text === "DROP") {
        logs.push("Dropped an item!");
      } else {
        logs.push("Picked up an item!");
      }
    }
  }
  return (
    <div className="CircleButton">
        <button onClick={handleChange}>
            {text}
        </button>
    </div>
  );
};

export default CircleButton;
