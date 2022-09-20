import "./Nest.css";
import React from "react";
import nest_Image from '../Images/nest.png';
import NestImage from "./NestImage";

function template() {
  return (
    <div className="nest" style={{position:'relative'}}>
      
      <div style={{display:'inline-block',position:'absolute',top:"10px",left:"100px"}}>
      <NestImage image={nest_Image}/>
      </div>
      <div style={{display:'inline-block',position:'absolute',top:"-80px",left:"600px"}}>
      <NestImage image={nest_Image}/>
      </div>
      <div style={{display:'inline-block',position:'absolute',right:"50px",top:"40px"}}>
      <NestImage image={nest_Image}/>
      </div>
      <div style={{display:'inline-block',position:'absolute',left:"400px",top:"150px"}}>
      <NestImage image={nest_Image}/>
      </div>
      <div style={{display:'inline-block',position:'absolute',right:"500px",top:"50px"}}>
      <NestImage image={nest_Image}/>
      </div>

    </div>
  );
};

export default template;
