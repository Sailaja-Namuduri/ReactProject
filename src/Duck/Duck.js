import React    from "react";
import template from "./Duck.jsx";

class Duck extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Duck;
