import './style.css';
import React, { useState } from 'react';
import { firebaseApp } from './firebase';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export function FirebaseExercise() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('submit');

    signInWithEmailAndPassword(getAuth(firebaseApp), email, password)
      .then(() => {
        console.log('zalogowano');
      })
      .catch((err) => {
        console.log(err, 'błąd');
      });
  };

  return (
    <div>
      <MasterHeader value="Firebase" />
      <p>Basic form just for tests</p>
      <div>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-container-column">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="form-container-column">
            <label htmlFor="password">Hasło</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button className="form-btn" type="submit">
            Zaloguj
          </button>
        </form>
      </div>
    </div>
  );
}
