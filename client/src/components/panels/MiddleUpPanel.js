import React from "react";
import "../../styles/panels/MiddleUpPanel.css";
import SquareButton from "../inputs/SquareButton";
import ToggleSwitch from "../inputs/ToggleSwitch";


const MiddleUpPanel = ({logs}) => {
  return (
    <div className="MiddleUpPanel">
        <SquareButton logs={logs} type={"stop"} text={"STOP"}/>
        <ToggleSwitch logs={logs}/>
        <SquareButton logs={logs} type={"pause"} text={"PAUSE"}/>
    </div>
  );
};

export default MiddleUpPanel;
