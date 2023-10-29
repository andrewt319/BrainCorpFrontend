import React from "react";
import "../../styles/panels/MiddlePanel.css";
import MiddleUpPanel from "../panels/MiddleUpPanel";
import MiddleDownPanel from "../panels/MiddleDownPanel";


const MiddlePanel = ({logs}) => {
  return (
    <div className="MiddlePanel">
        <h1>CONTROL PANEL</h1>
        <div className="middleInputs">
          <MiddleUpPanel logs={logs}/>
          <MiddleDownPanel logs={logs}/>
        </div>
    </div>
  );
};

export default MiddlePanel;
