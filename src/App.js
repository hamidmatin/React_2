import React, { Component } from "react";
import Students from './students/Students';
import './App.css';

class App extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div className='container'>
        <h1>Hello React</h1>
        <p>React course in MFT</p>
        <hr/>
        <Students/>
      </div>
    );
  }
}

export default App;
