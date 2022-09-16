import React    from "react";
import template from "./ExceptionHandler.jsx";

class ExceptionHandler extends React.Component {
  
  state={
    hasException:false,
    msg:''
  };
  
  static getDerivedStateFromError(error){
       return {
         hasException:true,
         msg:error.message
       }
  }
  componentDidCatch(error,errorStack){
    console.log('::::',error)
    console.log('::::',errorStack)
  }
  render() {
    return template.call(this);
  }
}

export default ExceptionHandler;
