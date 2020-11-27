import React, { Component } from 'react';

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        console.log('Dashboard')
    }
  render() {
     
    return (
      <div>
        <h1>Dashboard</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facilis
          totam dolorum! Praesentium nesciunt, sed magnam a odio nemo sunt
          possimus, fuga eveniet voluptates impedit cumque! Magni numquam
          reiciendis odio.
        </p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ul>
      </div>
    );
  }
}
