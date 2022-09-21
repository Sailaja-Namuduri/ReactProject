import React    from "react";
import template from "./Ducklings.jsx";

class Ducklings extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Ducklings;
