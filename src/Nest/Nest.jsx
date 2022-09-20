import "./Nest.css";
import React from "react";
import nest_Image from '../Images/nest.png';

function template() {
  return (
    <div className="nest" style={{position:'relative'}}>
      <div style={{display:'inline-block',position:'absolute',top:"10px",left:"100px"}}>
      <button><img src={nest_Image} width={200} height={100}/></button>
      </div>
      <div style={{display:'inline-block',position:'absolute',top:"-80px",left:"600px"}}>
      <button><img src={nest_Image} width={200} height={100}/></button>
      </div>
      <div style={{display:'inline-block',position:'absolute',right:"50px",top:"40px"}}>
        <button><img src={nest_Image} width={200} height={100}/></button>
      </div>
      <div style={{display:'inline-block',position:'absolute',left:"400px",top:"150px"}}>
      <button><img src={nest_Image} width={200} height={100}/></button>
      </div>
      <div style={{display:'inline-block',position:'absolute',right:"500px",top:"50px"}}>
      <button><img src={nest_Image} width={200} height={100}/></button>
      </div>

    </div>
  );
};

export default template;
