import React from "react";
import "../../styles/inputs/SquareButton.css";

const SquareButton = ({logs, text, type}) => {
  const handleChange = () => {
    if (logs.length != 0) {
      if (text === "STOP") {
        logs.push("Emergency stop!");
      } else {
        logs.push("Pause!");
      }
    }
  }

  return (
    <div className="SquareButton">
        <button onClick={handleChange} className={type}>
            {text}
        </button>
    </div>
  );
};

export default SquareButton;
