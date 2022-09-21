import "./Nest.css";
import React from "react";
import nest_Image from '../Images/nest.png';
import NestImage from "./NestImage";

function template() {
  const {clik}=this.props;

  const clikHigher1=()=>{
    clik(100,10);
  }
  const clikHigher2=()=>{
    clik(600,-80);
  }
  const clikHigher3=()=>{
    clik(1200,40);
  }
  const clikHigher4=()=>{
    clik(400,150);
  }
  const clikHigher5=()=>{
    clik(890,50);
  }

  return (
    <div className="nest" style={{position:'relative',top:150}}>
      
      <div style={{display:'inline-block',position:'absolute',top:"10px",left:"100px"}} onClick={clikHigher1}>
      <NestImage image={nest_Image}/>1
      </div>
      <div style={{display:'inline-block',position:'absolute',top:"-80px",left:"600px"}} onClick={clikHigher2}>
      <NestImage image={nest_Image}/>2
      </div>
      <div style={{display:'inline-block',position:'absolute',left:"1200px",top:"40px"}} onClick={clikHigher3}>
      <NestImage image={nest_Image}/>3
      </div>
      <div style={{display:'inline-block',position:'absolute',left:"400px",top:"150px"}} onClick={clikHigher4}>
      <NestImage image={nest_Image}/>4
      </div>
      <div style={{display:'inline-block',position:'absolute',left:"890px",top:"50px"}} onClick={clikHigher5}>
      <NestImage image={nest_Image}/>5
      </div>

    </div>
  );
};

export default template;
