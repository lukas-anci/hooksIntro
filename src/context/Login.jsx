import React, { useContext } from 'react';
import UserContext from './UserContext';

export default function Login() {
  const userContext = useContext(UserContext);
  console.log('lalala', userContext);
  return (
    <div>
      <button onClick={() => userContext.onLogin('James')}>Login</button>
      <button onClick={() => userContext.onLogin('Lol')}>Login Lol</button>
    </div>
  );
}
