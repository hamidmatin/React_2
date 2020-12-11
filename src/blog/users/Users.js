import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './user/User';

export default function Users(props) {
  // const [users, setUsers] = useState([]);
  
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
  //     setUsers(response.data);
  //   });
  // }, []);

  return (
    <div className='container'>
      {props.users.length === 0 ? (
        <p>List is Empty</p>
      ) : (
        <div className='row'>
          {props.users.map((user) => (
            <User
              key={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              allUsers={props.users}
            />
          ))}
        </div>
      )}
    </div>
  );
}
