import "./Salary.css";
import React from "react";

function template() {
  const {name,amt}=this.state
  
  if(amt < 0){
    throw new Error('Salary should +ve')
  }
  const fnNameChange=()=>{
    let name1=document.getElementById('name').value;
    this.setState({
      name:name1
    })
    console.log(name)
  }
  const fnSalaryChange=()=>{
    let salary1=document.getElementById('salary').value;
    if(salary1>0){
      this.setState({
        amt:salary1
      })}
      else{
        this.setState({
          amt:'Salary Should be >0'
        })
      }
    console.log(amt)
  }
  return (
    <div className="salary">
     
        Name:<input id="name" onChange={fnNameChange}/><br/>
        Salary:<input id='salary' onChange={fnSalaryChange}/>

        This is {name} and My Salary is {amt}
     
    </div>
  );
};

export default template;
