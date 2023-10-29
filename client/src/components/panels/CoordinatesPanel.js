import React from "react";

const CoordinatesPanel = ({x, y}) => {
    return (
      <div className="CoordinatesPanel">
        <h2>X:{x}  Y:{y}</h2>
      </div>
    );
  };

  export default CoordinatesPanel;