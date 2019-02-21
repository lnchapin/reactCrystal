import React from "react";

function CrystalPics(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img aria-label="image" className="image" onClick={()=>props.score(props.id, props.value)} alt={props.id}
        value={10} src={props.image} />
      </div>
    </div>
  )
};

export default CrystalPics;
