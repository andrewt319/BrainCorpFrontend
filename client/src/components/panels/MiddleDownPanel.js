import React, { useState } from "react";
import "../../styles/panels/MiddleDownPanel.css";
import UpDownButton from "../inputs/UpDownButton";
import LeftRightButton from "../inputs/LeftRightButton";
import CoordinatesPanel from "./CoordinatesPanel";

const MiddleDownPanel = ({logs}) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleLeftButtonPress = () => {
    console.log('here')
    setX(x - 1);
  };

  const handleRightButtonPress = () => {
    setX(x + 1);
  };

  const handleUpButtonPress = () => {
    setY(y + 1);
  };

  const handleDownButtonPress = () => {
    setY(y - 1);
  };

  return (
    <div className="MiddleDownPanel">
      <CoordinatesPanel x={x} y={y} />
      <div className="directions">
        <LeftRightButton updateCoord={handleLeftButtonPress} logs={logs} direction={"left"} />
        <div className="UpDownButtons">
          <UpDownButton updateCoord={handleUpButtonPress} logs={logs} direction={"up"} />
          <UpDownButton updateCoord={handleDownButtonPress} logs={logs} direction={"down"} />
        </div>
        <LeftRightButton updateCoord={handleRightButtonPress} logs={logs} direction={"right"} />
      </div>
    </div>
  );
};

export default MiddleDownPanel;
