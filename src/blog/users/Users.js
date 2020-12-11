import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Loading from '../../loading/Loading';
import User from './user/User';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className='container'>
      {isLoading ? (
        <Loading />
      ) : users.length === 0 ? (
        <p>List is Empty</p>
      ) : (
        <div className='row'>
          {users.map((user) => (
            <User
              key={user.id}
                name={user.name}
                username={user.username}
                email={user.email}
                allUsers={users}
              // properties={{
              //   id: user.id,
              //   name: user.name,
              //   username: user.username,
              //   email: user.email,
              // }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
