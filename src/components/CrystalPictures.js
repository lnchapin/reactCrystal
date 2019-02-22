import React from "react";

function CrystalPics(props) {
  return (
    <div className="card">
        <img className="card-img-top" onClick={()=>props.score(props.id, props.value)} alt={props.id}
        value={10} src={props.image} />
    </div>
  )
};

export default CrystalPics;
