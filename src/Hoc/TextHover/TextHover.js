import React    from "react";
import template from "./TextHover.jsx";
import incCntHoc from '../incCntHoc';
 
class TextHover extends React.Component {
 
  render() {
    return template.call(this);
  }
}

export default incCntHoc(TextHover)
