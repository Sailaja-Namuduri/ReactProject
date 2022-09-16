import "./Hoc.css";
import React from "react";
import TextHover from './TextHover/index'
import ButtonClick from './ButtonClick/index'
function template() {
  return (
    <div className="hoc">
      <h4>Example on Higher Order Components</h4>
      <ButtonClick />
      <TextHover />
    </div>
  );
};

export default template;
