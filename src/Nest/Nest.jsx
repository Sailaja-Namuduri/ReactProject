import "./Nest.css";
import React from "react";
import nest_Image from '../Images/nest.png';
import NestImage from "./NestImage";
import Eggs from "../Eggs/Eggs";
import Ducklings from "../Ducklings";

function template() {
  const {clik}=this.props;

  const clikHigher1=()=>{
    var eggLay=setTimeout(()=>{this.setState({
      nestClick1:true
    })},2000)
    
    var timout=setTimeout(()=>{
      this.setState({
        nestClick1:false,
        duckling1:true
      })
    },5000);
    clik(140,70);
    

  }
  const clikHigher2=()=>{
    var eggLay=setTimeout(()=>{this.setState({
      nestClick2:true
    })},2000)
    var timout=setTimeout(()=>{
      this.setState({
        nestClick2:false,
        duckling2:true
      })
    },5000);
    clik(650,-10);
  }
  const clikHigher3=()=>{
    var eggLay=setTimeout(()=>{this.setState({
      nestClick3:true
    })},2000)
    var timout=setTimeout(()=>{
      this.setState({
        nestClick3:false,
        duckling3:true
      })
    },5000);
    clik(1250,110);
  }
  const clikHigher4=()=>{
    var eggLay=setTimeout(()=>{this.setState({
      nestClick4:true
    })},2000)
    var timout=setTimeout(()=>{
      this.setState({
        nestClick4:false,
        duckling4:true
      })
    },5000);
    clik(440,220);
  }
  const clikHigher5=()=>{
    var eggLay=setTimeout(()=>{this.setState({
      nestClick5:true
    })},2000)
    var timout=setTimeout(()=>{
      this.setState({
        nestClick5:false,
        duckling5:true
      })
    },5000);
    clik(930,125);
  }

  return (
    <div className="nest" style={{position:'relative',top:100}}>
      <div style={{display:'inline-block',position:'absolute',top:"10px",left:"100px"}} onClick={clikHigher1}>
      <NestImage image={nest_Image}/>1
        {this.state.nestClick1?<Eggs/>:''}
          {this.state.duckling1==true?<Ducklings/>:''}
      </div>
      <div style={{display:'inline-block',position:'absolute',top:"-80px",left:"600px"}} onClick={clikHigher2}>
      <NestImage image={nest_Image}/>2
        {this.state.nestClick2?<Eggs/>:''}
          {this.state.duckling2?<Ducklings/>:''}   
      </div>
      <div style={{display:'inline-block',position:'absolute',left:"1200px",top:"40px"}} onClick={clikHigher3}>
      <NestImage image={nest_Image}/>3
        {this.state.nestClick3?<Eggs/>:''}
          {this.state.duckling3?<Ducklings/>:''}    
      </div>
      <div style={{display:'inline-block',position:'absolute',left:"400px",top:"150px"}} onClick={clikHigher4}>
      <NestImage image={nest_Image}/>4
        {this.state.nestClick4?<Eggs/>:''}
          {this.state.duckling4?<Ducklings/>:''}  
      </div>
      <div style={{display:'inline-block',position:'absolute',left:"890px",top:"50px"}} onClick={clikHigher5}>
      <NestImage image={nest_Image}/>5
        {this.state.nestClick5?<Eggs/>:''}
          {this.state.duckling5?<Ducklings/>:''}   
      </div>
    </div>
  );
};

export default template;
