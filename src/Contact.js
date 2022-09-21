
import React from 'react'
import Duck from './Duck/Duck'
import Nest from './Nest/Nest'


export const Contact = () => {
  const [lft,setLft]=React.useState(0);
  const [tp,setTp]=React.useState(0);

  const fnClick=(l,t)=>{
    debugger;
    setLft(l);
    setTp(t);
    console.log(l);
    console.log(t);
  }

  return (
    <div>
      <Duck l={lft} t={tp}/>
      <Nest clik={fnClick}/>
    </div>
  )
}
