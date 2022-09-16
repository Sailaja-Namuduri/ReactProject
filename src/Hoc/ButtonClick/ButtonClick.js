import React    from "react";
import template from "./ButtonClick.jsx";
import incCntHoc from '../incCntHoc';

class ButtonClick extends React.Component {
 
  render() {
    return template.call(this);
  }
}

//export default ButtonClick;
export default incCntHoc(ButtonClick)
