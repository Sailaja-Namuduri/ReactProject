import "./ButtonClick.css";
import React from "react";

function template() {
  const {cnt,fnIncCnt} =this.props
  return (
    <div className="button-click">
       {this.props.name}
       <button onClick={fnIncCnt}>He clicked me {cnt} time(s)</button>
    </div>
  );
};

export default template;
