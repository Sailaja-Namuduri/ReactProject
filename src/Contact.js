
import React from 'react'
import Duck from './Duck/Duck'
import DuckHome from './DuckHome';
import Nest from './Nest/Nest'


export const Contact = () => {
  const [lft,setLft]=React.useState(0);
  const [tp,setTp]=React.useState(0);
  const fnClick=(l,t)=>{
    setLft(l);
    setTp(t);
    setTimeout(()=>{setLft(l+80)},3000);
  }

  return (
    <div style={{position:'relative'}}>
      <DuckHome clik={fnClick}/>
      <Duck l={lft} t={tp} />
      <Nest clik={fnClick} />
    </div>
  )
}
