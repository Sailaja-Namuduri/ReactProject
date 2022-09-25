import "./DuckHome.css";
import React from "react";
import hut from '../Images/hut.png';
import { store } from "../reduxStore/store";
function template() {
  const {clik}=this.props;
  const homeClick=()=>{
    clik(-20,-80);
    store.dispatch({type:'HomeClick',homeClick:true})
  }
  return (
    <div className="duck-home" style={{display:'inline-block',cursor:'pointer'}} onClick={homeClick}>
      <img src={hut}width={160} height={160}/>
    </div>
  );
};

export default template;
