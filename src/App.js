import React, { Component } from 'react';
import './App.css';
import routes from './routes'

class App extends Component {
  constructor(){
    super()
    this.state={
      username:'',
      password:''
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {routes}
        </header>
      </div>
    );
  }
}

export default App;
