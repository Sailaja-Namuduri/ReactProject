import React    from "react";
import template from "./Eggs.jsx";

class Eggs extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Eggs;
