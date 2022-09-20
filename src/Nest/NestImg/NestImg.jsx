import "./NestImg.css";
import React from "react";
function template() {
  const {n}=this.props
  return (
    <div className="nest-img">
      <button><img src={n} width={200} height={100}/></button>
    </div>
  );
};

export default template;
