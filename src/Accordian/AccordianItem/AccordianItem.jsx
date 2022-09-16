import "./AccordianItem.css";
import React from "react";

function template() {
  const {obj,index,fnClick,isShow}=this.props
  return (
    <div key={index}>
        <h5 onClick={()=>fnClick(index)} style={{color:'red'}}>{obj.heading}</h5>
        {isShow && <div>{obj.text}</div>}
    </div>
  );
};

export default template;
