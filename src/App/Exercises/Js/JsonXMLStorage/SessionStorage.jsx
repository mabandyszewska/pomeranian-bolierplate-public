//...........................
// SESSION STORAGE - przechowywanie stanu aplikacji, dostępny tylko dla danej strony (per sesja), pamięć do 5MB
//...........................

import { useState } from 'react';

export const SessionStorage = () => {
  const USER_SESSION_SOTRAGE = JSON.parse(sessionStorage.getItem('user'));
  const [user, setUser] = useState(USER_SESSION_SOTRAGE || {});

  const handleSaveData = () => {
    const user = {
      name: 'John',
      age: 30,
    };
    setUser(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <div>
      <p>Name: {user?.name}</p>
      <p>Age: {user?.age}</p>
      <button onClick={handleSaveData}>Save user data</button>
    </div>
  );
};
