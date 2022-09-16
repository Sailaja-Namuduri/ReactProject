import "./Exceptions.css";
import React from "react";
import Hero from './Hero/index'
import ExceptionHandler from '../ExceptionHandler/index'
function template() {
  
  
  
  return (
    <div className="exceptions">
      <h1>Exceptions</h1>
      <div>Task::If you give name='Joker', throws exception , which is handled by lifecycle method getDerivedStateFromError to avoid the interruption in entire application</div>
      <div></div>
      Enter a Name:<input id="nameRef" onChange={this.fnChange}/>
    <ExceptionHandler>
        <Hero name={this.state.name}></Hero>
    </ExceptionHandler>
    
    </div>
  );
};

export default template;
