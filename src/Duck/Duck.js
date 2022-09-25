import React    from "react";
import { connect } from "react-redux";
import template from "./Duck.jsx";

class Duck extends React.Component {
  render() {
    return template.call(this);
  }
}
Duck=connect(  
  (state)=>{
    return {

      homeclicked:state.myReducer.homeClick,
      nestClicked:state.myReducer.nestClick
    }
  }
)(Duck)
export default Duck;
