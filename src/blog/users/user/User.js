import React from 'react';
import { Link } from 'react-router-dom';

export default function User(props) {
    // console.log(props.allUsers)
  return (
    <div className='col s12 m6'>
      <div className='card blue-grey darken-1'>
        <div className='card-content white-text'>
          <span className='card-title'>{props.name}</span>
          <p>
            <span>User Name : </span>
            <span>{props.username}</span>
          </p>
          <p>
            <span>Email : </span>
            <span>{props.email}</span>
          </p>
        </div>
        <div className='card-action'>
          <a href='https://www.mft.info/' target='_blank' rel='noreferrer'>MFT</a>
          <Link to='blog' >This is a link</Link>
        </div>
      </div>
    </div>
  );
}
