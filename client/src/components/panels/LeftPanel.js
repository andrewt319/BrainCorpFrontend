import SpeedSlider from "../inputs/SpeedSlider";
import React from "react";
import "../../styles/panels/LeftPanel.css";

const LeftPanel = ({logs}) => {
  return (
    <div className="LeftPanel">
      <SpeedSlider logs={logs}/>
    </div>
  );
};

export default LeftPanel;
