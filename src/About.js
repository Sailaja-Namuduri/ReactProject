import React from 'react'
import Salary from './Salary/index'
import ExceptionHandler from './ExceptionHandler'
export const About = () => {

  return (
    <div>
      <h1>About</h1>
      <h3>Salary Exception</h3>
      <ExceptionHandler>
         <Salary />

      </ExceptionHandler>
      

    </div>
  )
}
