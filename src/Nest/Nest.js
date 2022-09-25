import React    from "react";
import { connect } from "react-redux";
import template from "./Nest.jsx";

class Nest extends React.Component {
  state={
    nestClick1:false,
    nestClick2:false,
    nestClick3:false,
    nestClick4:false,
    nestClick5:false,
    duckling1:false,
    duckling2:false,
    duckling3:false,
    duckling4:false,
    duckling5:false,
  }
  render() {
    return template.call(this);
  }
}

export default Nest;
