import "./MyReuse.css";
import React from "react";
import {List} from '../List'
import Select from '../Select';
import {Questions} from '../Questions'
import {Table} from '../Table'
function template() {
  return (
    <div className="my-reuse">
    <Table tds={['name','marks']} data={this.stdData} heading="Students" ths={['Student Name','Makrs']} />
    <Table tds={['n','r','l']} data={this.playersData} heading="Players" ths={['Name','Runs','Location']} />

    <Questions heading="GK" data={this.gkQue} ></Questions> 
    <Questions heading="React" data={this.reactQue} ></Questions> 


      <h1>List Componnet</h1>
       <h3>Players</h3>
       <List  data={this.players} />
       <Select data={this.players} />
        <h3>Students</h3>
        <List  data={this.students} />
        <Select data={this.students} />
        <h3>Heros</h3>
        <List  data={this.heros} />
        <Select data={this.heros} />
       

    </div>
  );
};

export default template;
