import React from "react";
import "./App.css";
import BottomQuarter from "./BottomQuarter";
import BottomDown from "./BottomDown";
import BottomBallOn from "./BottomBallOn";
import BottomToGo from "./BottomToGo";

const BottomRow = () => {
  return (
    <div className="bottomRow">
      <BottomDown />
      <BottomToGo />
      <BottomBallOn />
      <BottomQuarter />
    </div>
  );
};

export default BottomRow;