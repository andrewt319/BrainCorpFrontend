import React from "react";
import "../../styles/panels/RightPanel.css";
import CircleButton from "../inputs/CircleButton";



const RightPanel = ({logs}) => {
  return (
    <div className="RightPanel">
        <CircleButton logs={logs} text={"PICK UP"}/>
        <CircleButton logs={logs} text={"DROP"}/>
    </div>
  );
};

export default RightPanel;
