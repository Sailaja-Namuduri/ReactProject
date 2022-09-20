import React    from "react";
import template from "./Nest.jsx";

class Nest extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Nest;
