import React, { Component } from 'react';
import axios from 'axios';

import User from './user/User';
export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log(response.data);
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        {this.state.users !== null ? (
          this.state.users.map((user) => 
          
            <User key={user.id} name={user.name} />
        )
        ) : (
          <p>Loading Users</p>
        )}
      </div>
    );
  }
}
