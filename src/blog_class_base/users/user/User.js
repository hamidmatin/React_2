import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class User extends Component {
  render() {
    return (
      <div className='col s12 m6'>
        <div className='card blue-grey darken-1'>
          <div className='card-content white-text'>
            <span className='card-title'>{this.props.name}</span>
            <p>
              <span>User Name : </span>
              <span>{this.props.username}</span>
            </p>
            <p>
              <span>Email : </span>
              <span>{this.props.email}</span>
            </p>
          </div>
          <div className='card-action'>
            <a href='https://www.mft.info/' target='_blank' rel='noreferrer'>
              MFT
            </a>
            <Link to='blog'>This is a link</Link>
          </div>
        </div>
      </div>
    );
  }
}
