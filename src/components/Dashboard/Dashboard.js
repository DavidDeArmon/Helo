import React, { Component } from "react";
import PostsCard from "./PostsCard";

class Dashboard extends Component {
  constructor(){
    super()
    this.state={
      searchInput:''
    }
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    
  }
  render() {
    return (
      <div>
          <h2>Dashboard</h2>
          <input name='searchInput' onChange={this.handleChange}></input>
          <PostsCard searchInput={this.state.searchInput}/>
      </div>
    );
  }
}

export default Dashboard;
