import './styles.css';
import { useState, useEffect } from 'react';
export const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const [intervalid, setSetIntervalid] = useState(0);

  function handleStopStart() {
    if (isRunning) {
      clearInterval(intervalid);
      setIsRunning(false);
    } else {
      setIsRunning(true);
      incrementTime();
    }
  }

  function handleRestart() {
    setTimer(0);
    if (!isRunning) {
      incrementTime();
      setIsRunning(true);
    }
  }

  function incrementTime() {
    const id = setInterval(() => {
      setTimer((currentTime) => currentTime + 1);
    }, 1000);
    setSetIntervalid(id);
  }
  // useEffect(() => {
  //   if (timer === 10) {
  //     clearInterval(intervalid);
  //     setIsRunning(false);
  //     setTimer(0);
  //   }
  // }, [timer, intervalid]);

  return (
    <div>
      <h1>Tekst</h1>
      <p>{timer} sec</p>
      <button onClick={handleStopStart}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};
