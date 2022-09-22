import React    from "react";
import template from "./DuckHome.jsx";

class DuckHome extends React.Component {
  render() {
    return template.call(this);
  }
}

export default DuckHome;
