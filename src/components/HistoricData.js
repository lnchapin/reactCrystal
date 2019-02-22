import React from "react";

function Data(props) {
  return (
    <div className="scoreValue">
      <h3>Wins: {props.wins}</h3>
      <h3>Loses: {props.loses}</h3>
    </div>
  )
};

export default Data;
