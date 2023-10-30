import React from "react";
import "../../styles/inputs/UpDownButton.css";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const UpDownButton = ({updateCoord, direction, logs}) => {
  const handleChange = () => {
    if (logs.length !== 0) {
      updateCoord();
      if (direction === "up") {
        logs.push("Moved Up!");
      } else {
        logs.push("Moved Down!");
      }
    }
  }

  return (
    <div className="UpDownButtons">
      <button onClick={handleChange}>
        {direction === "up" && <IoIosArrowUp/>}
        {direction === "down" && <IoIosArrowDown/>}
      </button>
    </div>
  );
};

export default UpDownButton;
