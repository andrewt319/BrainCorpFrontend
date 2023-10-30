import React, { useState } from "react";
import "../../styles/inputs/ToggleSwitch.css";
import axios from "axios";

const ToggleSwitch = ({logs}) => {
  const [isOn, setIsOn] = useState(false);
  const url = 'http://localhost:8000/logs';

  const handleChange = async () => {
    if (isOn) {
      logs.push("Turned off robot!");
      console.log(logs.join("\n"));
      try {
        await axios.post(url, {
          logs: logs.join("\n")
        });
      } catch (error) {
        console.log(error);
      }
      logs.length = 0;
    } else {
      logs.push("Turned on robot!");
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
