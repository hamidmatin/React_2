import React, { useState, useEffect } from 'react';

import Users from './users/Users';
import WithLoading from '../hoc/WithLoading';

export default function Blog() {
  const UsersWidthLoading = WithLoading(Users);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return <UsersWidthLoading isLoading={isLoading} />;
}
