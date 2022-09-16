import "./TextHover.css";
import React from "react";

function template() {
  const {cnt,fnIncCnt} =this.props
  return (
    <div className="text-hover">
      <h4 onMouseOver={fnIncCnt}>Hover me {cnt} time(s)</h4>
    </div>
  );
};

export default template;
