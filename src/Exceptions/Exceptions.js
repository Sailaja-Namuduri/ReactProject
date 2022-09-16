import React    from "react";
import template from "./Exceptions.jsx";

class Exceptions extends React.Component {
   state={
    name:''
   }
   
   fnChange=()=>{
    let a=document.getElementById('nameRef').value
    this.setState({
      name:a
    })
  }
  render() {
    return template.call(this);
  }
}

export default Exceptions;
