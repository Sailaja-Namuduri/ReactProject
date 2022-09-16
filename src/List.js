import React from 'react'

export const List = (props) => {
  return (
    <ol>
        {
        props.data.map((v,i)=>{
            return <li key={i}>{v}</li>
        })
        }
    </ol>
  )
}


