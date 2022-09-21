
import React from 'react'
import Duck from './Duck/Duck'
import Nest from './Nest/Nest'


export const Contact = () => {
  const [lft,setLft]=React.useState(0);
  const [tp,setTp]=React.useState(0);

  const fnClick=()=>{
    debugger;
    setLft(100);
    setTp(10);
    console.log(lft);
    console.log(tp);
  }

  return (
    <div>
      <Duck l={lft} t={tp}/>
      <Nest clik={fnClick}/>
    </div>
  )
}
