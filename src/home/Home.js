import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props){
        super(props)
        console.log('Home')
    }
  render() {
      
    return (
      <div>
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde commodi
          cupiditate dignissimos quos. Est saepe dolore fugit, corrupti laborum
          sint modi eius excepturi culpa, eligendi vel aliquid! Molestias, ipsa
          quidem!
        </p>
      </div>
    );
  }
}
