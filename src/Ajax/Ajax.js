import React    from "react";
import template from "./Ajax.jsx";
import axios from 'axios';

class Ajax extends React.Component {
  state={
    heading:'',
    ths:[],
    data:[],
    tds:[]
  }
  fnGetUsers=()=>{
      let httpObj=new XMLHttpRequest()
      httpObj.open('get','https://jsonplaceholder.typicode.com/users')
      httpObj.send()
      httpObj.onload=()=>{
          let res=  httpObj.responseText
          res=JSON.parse(res)
          this.setState({
            heading:'USERS',
            ths:['ID','NAME','Email'],
            data:res,
            tds:['id','name','email']
          })
      }
      httpObj.onerror=()=>{

      }
  }
  fnGetPosts=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method:'get'
    })
    .then((res)=>{
        return   res.json()
    })
    .then((data)=>{
      console.log(data)
      this.setState({
        heading:'POSTS',
        ths:['ID','BODY','TITLE'],
        data:data,
        tds:['id','body','title']
      })
    })
    .catch(()=>{
      
    })
  }

  fnGetPhotos=async ()=>{
     /* axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((res)=>{
        console.log(res.data)
      })
      .catch(()=>{

      })*/

    const res= await axios.get('https://jsonplaceholder.typicode.com/photos');
    console.log(res.data)
    this.setState({
      heading:'PHOTOS',
      ths:['ID','URL','TITLE'],
      data:res.data,
      tds:['id','url','title']
    })
  }
  render() {
    return template.call(this);
  }
}

export default Ajax;
