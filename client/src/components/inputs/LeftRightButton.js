import React from "react";
import "../../styles/inputs/LeftRightButton.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const LeftRightButton = ({updateCoord, logs, direction}) => {
  const handleChange = () => {
    if (logs.length != 0) {
      logs.push("Moved " + direction + "!")
      updateCoord();
    }
  }
  return (
    <div className="LeftRightButton">
      <button onClick={handleChange}>
        {direction === 'left' && <IoIosArrowBack/>}
        {direction === 'right' && <IoIosArrowForward/>}
      </button>
    </div>
  );
};

export default LeftRightButton;
