import React, { useContext } from 'react';
import UserContext from './UserContext';

export default function MovieRow() {
  const userContext = useContext(UserContext);
  return <div> {userContext.user.name} shits in 58 Movie Row</div>;
}
