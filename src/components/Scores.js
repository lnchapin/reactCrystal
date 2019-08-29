import React from "react";

function Scores(props) {
  return (
    <div className="targetScoreValue">
      <h3>Target Score: {props.target}</h3>
      <h3>Your Score: {props.yScore}</h3>
    </div>
  )
}

export default Scores;
