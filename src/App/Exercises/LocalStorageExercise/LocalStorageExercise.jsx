import React, { useState, useEffect } from 'react';
import './styles.css';

export const NicknameList = () => {
  const [nicknames, setNicknames] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  const [newNickname, setNewNickname] = useState('');

  useEffect(() => {
    const storedNicknames = JSON.parse(
      localStorage.getItem('list-nicki') || '[]'
    );
    const storedIdCounter = JSON.parse(
      localStorage.getItem('list-nicki-idCounter') || '0'
    );

    setNicknames(storedNicknames);
    setIdCounter(storedIdCounter);
    console.log('Loaded from localStorage:', storedNicknames, storedIdCounter);
  }, []);

  useEffect(() => {
    localStorage.setItem('list-nicki', JSON.stringify(nicknames));
    localStorage.setItem('list-nicki-idCounter', JSON.stringify(idCounter));
    console.log('Saved to localStorage:', nicknames, idCounter);
  }, [nicknames, idCounter]);

  const handleAddNickname = () => {
    if (newNickname.trim() === '') return;

    const newNicknameObject = {
      id: idCounter,
      nick: newNickname,
      facts: [],
    };

    setNicknames([...nicknames, newNicknameObject]);
    setIdCounter(idCounter + 1);
    setNewNickname('');
  };

  const handleRemoveNickname = (id) => {
    const updatedNicknames = nicknames.filter((nickname) => nickname.id !== id);
    setNicknames(updatedNicknames);
  };

  return (
    <div className="localstorage-container">
      <div className="localstorage-input-container">
        <label htmlFor="nick" className="localstorage-input-label">
          NICK
        </label>
        <input
          id="nick"
          type="text"
          placeholder="Enter a nickname"
          value={newNickname}
          onChange={(e) => setNewNickname(e.target.value)}
        />
        <div>
          <button className="localstorage-add-btn" onClick={handleAddNickname}>
            Add
          </button>
        </div>
      </div>

      {nicknames.length > 0 && (
        <div className="localstorage-list-container">
          <ul>
            {nicknames.map((nickname) => (
              <li key={nickname.id}>
                {nickname.nick}
                <button
                  className="localstorage-delete-btn"
                  onClick={() => handleRemoveNickname(nickname.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
