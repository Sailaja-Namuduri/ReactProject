import "./Hero.css";
import React from "react";

function template() {
  const {name}=this.props
  if(name=='Joker'){
    throw new Error('You are not a Hero')
  }
  return (
    <div className="hero">
      {name==''?'':<span>I am <h4 style={{display:'inline'}}>{name}</h4>.</span>}
    </div>
  );
};

export default template;
