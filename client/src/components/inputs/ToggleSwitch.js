import React, { useState } from "react";
import "../../styles/inputs/ToggleSwitch.css";

const ToggleSwitch = ({logs}) => {
  const [isOn, setIsOn] = useState(false);

  const handleChange = async () => {
    if (isOn) {
      console.log("Turned off robot!");
      console.log(logs);
      logs.length = 0;
    } else {
      logs.push("Turned on robot!")
    }
    setIsOn(!isOn);
  }

  return (
    <div className="ToggleSwitch">
        <label class="switch">
            <input type="checkbox" onChange={handleChange}></input>
            <span class="slider"></span>
        </label>
    </div>
  );
};

export default ToggleSwitch;
