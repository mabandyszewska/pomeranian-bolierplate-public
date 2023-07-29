import { useEffect, useState } from 'react';
import './styles.css';

// STEP 1
export const SetTimeout = () => {
  const [value, setValue] = useState(0);
  const [progress, setProgress] = useState(10); //STEP 3

  function handleOnClick() {
    console.log('kliknieto');
    setValue(value + 10);
  }

  //STEP 2 useEffect jest wykonywana na końcu
  useEffect(() => {
    console.log('Jestem funkcją effectCallback');
    // setProgress(value);
    const id = setTimeout(() => {
      console.log('Zwiekszam rozmiar Progress Bar', value);
      setProgress(value);
    }, 4000);

    return () => clearTimeout(id);
  }, [value]);

  console.log('Pierwsza wiadomość', value, progress);

  return (
    <div>
      <h1>useEffect, setTimeout, setInterval</h1>
      <p>Value = {value}</p>
      <button onClick={handleOnClick}>Increment Value</button>

      <div style={{ backgroundColor: 'green', width: progress }}>...</div>
    </div>
  );
};
