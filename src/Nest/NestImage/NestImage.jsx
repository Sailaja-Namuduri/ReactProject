import "./NestImage.css";
import React from "react";
import nest_Image from '../../Images/nest.png'

function template() {
  const {image}=this.props;
  return (
    <div className="nest-image">
      <button><img src={image} width={200} height={100}/></button>
    </div>
  );
};

export default template;
