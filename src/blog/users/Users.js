import React, { Component } from 'react';
import axios from 'axios';

import User from './user/User';
import './Users.css';

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
      <div className='row p-3'>
        {this.state.users !== null ? (
          this.state.users.map((user) => (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
            />
          ))
        ) : (
          <p>Loading Users</p>
        )}
      </div>
    );
  }
}
