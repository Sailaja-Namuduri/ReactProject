import "./MyList.css";
import React from "react";

function template() {
  return (
    <div className="my-list">
      <h1>Lists And Keys</h1>
      <h3>Sachin Data</h3>
      <table border='1px'>
          <tbody>
               {
                 Object.keys(this.playerObj).map((k,index)=>{
                    return <tr key={index}>
                    <td>{k}</td>
                    <td>{this.playerObj[k]}</td>
                  </tr>
                 })
               }
          </tbody>
      </table>
      <h3>Table</h3>
      <table border="p1x">
         <thead>
              <tr>
                  <th>Name</th>
                  <th>Runs</th>
              </tr>
         </thead>
         <tbody>
              {
                this.data.map((obj,index)=>{
                  return  <tr key={index} >
                  <td>{obj.name}</td>
                  <td>{obj['runs']}</td>
              </tr>
                })
              }
               
         </tbody>
      </table>
      <h3>Select Box</h3>
      <select>
         {
           this.players.map((val,ind)=>{
                return <option key={ind}>{val}</option>
           })
         }
      </select>
      <h3>Order List</h3>
      <ol>
         {
           this.players.map((val,ind)=>{
              return <li key={ind}>{val}</li>
           })
         }
      </ol>
      <h3>Players Side by side</h3>

        {
           this.players.map((val,ind)=>{
              return <b key={ind}>{val+ ' ' }</b>
           })
         }
         <h3>Players Line By Line</h3>

          {
            this.players.map((val,ind)=>{
                return <p key={ind}>{val+ ' ' }</p>
            })
          }
    </div>
  );
};

export default template;
