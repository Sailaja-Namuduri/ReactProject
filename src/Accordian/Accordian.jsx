import "./Accordian.css";
import React from "react";
import AccordianItem from "./AccordianItem/index";
function template() {
 const {data}= this.props
 const {accItem} =this.state;
  return (
    <div className="accordian">
         {
           data.map((obj,index)=>{
               return <AccordianItem isShow={accItem==index} fnClick={this.fnClick} obj={obj} index={index} />
           })
         }
    </div>
  );
};

export default template;
