import React from 'react';
import User from './user/User';
import { useSelector, useDispatch } from 'react-redux';
import { loadAllUsers, addUser } from '../../redux/actions';

export default function Users(props) {
  const users = useSelector((state) => state.users);
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const loadAll = async () => {
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
