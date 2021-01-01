import React, { useContext } from 'react';

import { BlogContext } from '../../context/BlogContext';
import { loadAllUsers, addUser } from '../../context/actions'
import User from './user/User';

export default function Users(props) {
 
  const { blogState, dispatch } = useContext(BlogContext);

  // console.log(blogState)
  const users = blogState.users;

  const loadAll = () => {
    console.log('loadAll')
    dispatch(loadAllUsers());
  };
  const addNewUser = () => {
    dispatch(
      addUser({
        id: 33333,
        name: '-------',
        username: '--------',
        email: '----------------',
        address: {
          street: '-----------',
          suite: 'Suite 847',
          city: 'McKenziehaven',
          zipcode: '59590-4157',
          geo: {
            lat: '-68.6102',
            lng: '-47.0653',
          },
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
          name: 'Romaguera-Jacobson',
          catchPhrase: 'Face to face bifurcated interface',
          bs: 'e-enable strategic applications',
        },
      })
    );
  };
  
  return (
    <div className='container'>
      {users.length === 0 ? (
        <p>List is Empty</p>
      ) : (
        <div className='row'>
          {users.map((user) => (
            <User
              key={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
            />
          ))}
          <button onClick={loadAll}>Load All</button>
          <button onClick={addNewUser}>Add New User</button>
        </div>
      )}
    </div>
  );
}
