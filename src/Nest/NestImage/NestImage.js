import React    from "react";
import template from "./NestImage.jsx";

class NestImage extends React.Component {
  render() {
    return template.call(this);
  }
}

export default NestImage;
