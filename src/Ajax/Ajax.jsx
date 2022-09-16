import "./Ajax.css";
import React from "react";
import { Table } from "../Table";

function template() {
  const {heading,ths,data,tds} =this.state
  return (
    <div className="ajax">
      <h1>Ajax</h1>
      <button onClick={this.fnGetUsers}>Get Users</button>
      <button onClick={this.fnGetPosts}>Get Posts</button>
      <button onClick={this.fnGetPhotos}>Get Photos</button>
      
      <Table heading={heading} ths={ths} data={data} tds={tds} />
    </div>
  );
};

export default template;
