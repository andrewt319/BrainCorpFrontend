import React, { useState } from "react";
import "../../styles/inputs/SpeedSlider.css";

const SpeedSlider = ({logs}) => {
  const [currentSpeed, setCurrentSpeed] = useState(0);

  const handleSpeedLogs = () => {
    if (logs.length !== 0) {
      logs.push("Changed speed to " + currentSpeed + " m/s!");
    }
  }
  const handleChange = (event) => {
    const newSpeed = event.target.value;
    setCurrentSpeed(newSpeed);
  };

  return (
    <div className="SpeedSlider">
      <div className="slider">
        <input
          type="range"
          min={0}
          max={100}
          value={currentSpeed}
          onChange={handleChange}
          onMouseUp={handleSpeedLogs}
          className="slider"
        />
      </div>
      <span className="speed-label">{currentSpeed} m/s</span>
    </div>
  );
};

export default SpeedSlider;
