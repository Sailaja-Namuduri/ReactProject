import "./Duck.css";
import React from "react";
import duckImg from "../Images/1294915403.png"

function template() {
  return (
    <div className="duck" style={{border:'1px solid red',display:'inline-block',position:'absolute',left:850,zIndex:9}}>
      <img src={duckImg} width={100} height={100}/>
    </div>
  );
};

export default template;
