import React    from "react";
import template from "./MyReuse.jsx";

class MyReuse extends React.Component {
  constructor(){
    super();
    this.players=['Sachin','Dhoni','Kohli']
    this.students=['s1','s2','s3','s4']
    this.heros=['NTR','Prabhas']
    this.gkQue=[
      {
        que:'Who is the PM of India ?',
        options:['Modi','Amit','Rahul','None']
      },
      {
        que:'Below, which player belongs to Indian Cricket team ?',
        options:['Pointing','Dhoni','Lara','None']
      }
    ]
    this.reactQue=[
      {
        que:'ReactDOM.render take how many arguments ?',
        options:['2','1','3','None']
      },
      {
        que:'How to pass the data from child component to parent component ?',
        options:['context','callback','refs','state']
      }
    ]

    this.stdData=[
        {
          name:'s1',
          marks:500
        },
        {
          name:'s3',
          marks:400
        },
        {
          name:'s3',
          marks:300
        }
    ]
    this.playersData=[
      {
        n:'Sachin',
        r:20000,
        l:'Mumbai'
      },
      {
        n:'Dhoni',
        r:10000,
        l:'Ranchi'
      }
    ]
  }
  render() {
    return template.call(this);
  }
}

export default MyReuse;
