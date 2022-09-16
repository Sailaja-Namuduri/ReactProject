import React    from "react";
import template from "./MyList.jsx";

class MyList extends React.Component {
  constructor(){
    super();
    this.players=['Sachin','Dhoni','Kohli','UV']

    this.data=[
      {
        name:'Sachin',
        runs:20000
      },
      {
        name:'Dhoni',
        runs:15000
      },
      {
        name:'Kohli',
        runs:10000
      },
      {
        name:'uv',
        runs:11000
      }
    ]
    this.playerObj={
      name:'Sachin',
      runs:20000,
      hun:100,
      fif:77
    }
  }
  render() {
    return template.call(this);
  }
}

export default MyList;
