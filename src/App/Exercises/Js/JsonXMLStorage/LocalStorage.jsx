//...........................
// LOCAL STORAGE - przechowywanie stanu aplikacji, zawsze dostępne dla adresu URL, pamięć od 5MB do 10MB
//...........................

import { useState } from 'react';

export const LocalStorage = () => {
  const COUNT_LOCAL_STORAGE = parseInt(localStorage.getItem('count'));
  const [count, setCount] = useState(COUNT_LOCAL_STORAGE || 0);

  const handleIncrement = () => {
    const newCount = count + 1;

    setCount(newCount);
    localStorage.setItem('count', newCount);
    console.log(localStorage);
  };

  const handleReset = () => {
    setCount(0);
    localStorage.removeItem('count');
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button className="exercise-btn" onClick={handleIncrement}>
        Increment
      </button>
      <button className="exercise-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};
