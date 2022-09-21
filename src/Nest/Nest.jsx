import "./Nest.css";
import React from "react";
import nest_Image from '../Images/nest.png';
import NestImage from "./NestImage";

function template() {
  const {clik}=this.props;

  const clikHigher=()=>{
    clik();
  }

  return (
    <div className="nest" style={{position:'relative',top:150}}>
      
      <div style={{display:'inline-block',position:'absolute',top:"10px",left:"100px"}} onClick={clikHigher}>
      <NestImage image={nest_Image}/>1
      </div>
      <div style={{display:'inline-block',position:'absolute',top:"-80px",left:"600px"}} onClick={clikHigher}>
      <NestImage image={nest_Image}/>2
      </div>
      <div style={{display:'inline-block',position:'absolute',left:"1200px",top:"40px"}} onClick={clikHigher}>
      <NestImage image={nest_Image}/>3
      </div>
      <div style={{display:'inline-block',position:'absolute',left:"400px",top:"150px"}} onClick={clikHigher}>
      <NestImage image={nest_Image}/>4
      </div>
      <div style={{display:'inline-block',position:'absolute',left:"890px",top:"50px"}} onClick={clikHigher}>
      <NestImage image={nest_Image}/>5
      </div>

    </div>
  );
};

export default template;
