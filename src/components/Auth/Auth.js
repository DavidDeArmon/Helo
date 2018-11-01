import React, { Component } from "react";
import axios from 'axios';

class Auth extends Component {
  constructor(){
    super()
    this.state={
      username:'',
      password:''
    }
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
  handleRegister = () =>{
    axios.post('/api/register',{username:this.state.username,password:this.state.password})
      .then((response)=>console.log(response.data))
  }
  handleLogin = ()=>{
    axios.post('/api/login',{username:this.state.username,password:this.state.password})
      .then(response=>{
        if(response.data.length) this.props.history.push('/dashboard');
        console.log(this.props.history)
        console.log(response)
        });
  }
  render() {
    return (
      <div>
          <h2>Auth</h2>
          <input name='username' onChange={this.handleChange} value = {this.state.username}></input>
          <input name = 'password' onChange={this.handleChange} value = {this.state.password}></input>
          <div>
          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleRegister}>Register</button>
          </div>
      </div>
    );
  }
}

export default Auth;
