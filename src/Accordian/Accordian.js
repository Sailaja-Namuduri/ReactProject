import React    from "react";
import template from "./Accordian.jsx";

class Accordian extends React.Component {
  state={
    accItem:0
  }
  fnClick=(index)=>{
     this.setState({
       accItem:this.state.accItem == index  ? -1 : index
     })
  }
  render() {
    return template.call(this);
  }
}

export default Accordian;
