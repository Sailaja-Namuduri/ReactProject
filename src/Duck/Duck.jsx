import "./Duck.css";
import React from "react";
import duckImg from "../Images/1294915403.png"

function template() {
  const {l,t}=this.props;
  console.log('duck left::',{l});
  console.log('duck top::',{t});

  return (
    <div style={{position:'relative',top:t}}>
      <div className="duck" style={{border:'1px solid red',display:'inline-block',position:'absolute',left:l,zIndex:9}}>
        <img src={duckImg} width={100} height={100}/>
      </div>
    </div>
  );
};

export default template;
