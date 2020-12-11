import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Users from './users/Users';
import WithLoading from '../hoc/WithLoading';

export default function Blog() {
  const UsersWidthLoading = WithLoading(Users);

  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data);
      setIsLoading(false)
    });
  }, []);
  return <UsersWidthLoading users={users} isLoading={isLoading} />;
}
