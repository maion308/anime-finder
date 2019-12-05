import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      isLoaded: true
    }
  }

  componentDidMount(){
    console.log("mounted")
  }


  render(){
    console.log("rendered")
    return(
      <div>

      </div>
    )
  }
}

export default App;
