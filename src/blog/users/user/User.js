import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './User.css';
export default class User extends Component {
    
  render() {
    // console.log(this.props)
    // console.log(this.props.match)
    // console.log(this.props.match.params)
    // console.log(this.props.match.params.id)
    const linkAddress = `/blog/users/${this.props.id}`;

    return (
      <Link to={linkAddress} className='text-decoration-none'>
        <div className='card'>
          <h2 className='text-center'>{this.props.name}</h2>
          <div>
            <span>User Name :</span>
            <span>{this.props.username}</span>
          </div>
          <div>
            <span>Email :</span>
            <span>{this.props.email}</span>
          </div>
        </div>
      </Link>
    );
  }
}
