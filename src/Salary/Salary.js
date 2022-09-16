import React    from "react";
import template from "./Salary.jsx";

class Salary extends React.Component {
  state={
    name:'',
    amt:0
  }
  render() {
    return template.call(this);
  }
}

export default Salary;
