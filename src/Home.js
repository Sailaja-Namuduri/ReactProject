import React from 'react'
import Accordian from './Accordian/index'

const data=[
   {
     heading:'About me',
     text:`Hi I'm Sailaja`
   },
   {
    heading:'Experience',
    text:'I have both testing and Frontend developer experience.'
  },
  {
    heading:'Skills',
    text:'React, Typescript, Javascript, Java, NodeJS,  C#.net, SQL Server, MongoDB'
  }
]
const Home = () => {
  return (
    <div>
      <h4 >Welcome !!</h4>

    <Accordian data={data} />

    </div>
  )
}


export default Home;