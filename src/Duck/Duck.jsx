import "./Duck.css";
import React from "react";
import duckImg from "../Images/1294915403.png"

function template() {
  const {l,t,homeclicked,nestClicked}=this.props;
  console.log('duck left::',{l});
  console.log('duck top::',{t});
  console.log('duck_home clicked::::::::::',{homeclicked})
  return (
    <>

      <div style={{position:'relative',top:t}}>      
        <div className="duck" style={{display:'inline-block',position:'absolute',left:l,zIndex:9}}>
          {homeclicked|!nestClicked?<img src={duckImg} width={0} height={0}/>:<img src={duckImg} width={100} height={100}/>}      
        </div>
      </div>
      
    </>
  );
};

export default template;
