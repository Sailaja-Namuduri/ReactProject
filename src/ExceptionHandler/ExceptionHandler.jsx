import "./ExceptionHandler.css";
import React from "react";

function template() {
  const {hasException,msg}=this.state
  
  const {children}=this.props
  return (
    <div className="exception-handler">
      {hasException ? <h6 style={{color:'red'}}>{ msg }</h6>: children}
    </div>
  );
};

export default template;
