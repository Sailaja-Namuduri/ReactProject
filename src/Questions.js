import React from 'react'

export const Questions = (props) => {
  const {heading,data}=props;
  return (
    <div>
         <h3>{heading} Question Paper</h3>
            {
                data.map((obj,i)=>{
                    return <div>
                        <h4>{i+1} . {obj.que}</h4>
                        {
                        obj.options.map((v,index)=>{
                            return <p key={index}><input name={i} type='radio' />{v}</p>
                        })
                        }
                    </div>
                })
            }
    </div>
  )
}
