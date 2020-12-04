import React from 'react';

export default function User(props) {
    // console.log(props.allUsers)
  return (
    <div className='col s12 m6'>
      <div className='card blue-grey darken-1'>
        <div className='card-content white-text'>
          <span className='card-title'>{props.properties.name}</span>
          <p>
            <span>User Name : </span>
            <span>{props.properties.username}</span>
          </p>
          <p>
            <span>Email : </span>
            <span>{props.properties.email}</span>
          </p>
        </div>
        <div className='card-action'>
          <a href='#'>This is a link</a>
          <a href='#'>This is a link</a>
        </div>
      </div>
    </div>
  );
}
