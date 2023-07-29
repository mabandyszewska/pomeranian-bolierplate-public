import './styles.css';
import { useState } from 'react';
export const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const [intervalid, setSetIntervalid] = useState(0);
  function handleStopStart() {
    setIsRunning(!isRunning);
    incrementTime();
    setTimer(1);
  }

  function handleRestart() {
    setTimer(0);
    setIsRunning(false);
  }

  function incrementTime() {
    const id = setInterval(() => {
      setTimer((currentTime) => currentTime + 1);
    }, 1000);
    setSetIntervalid(id);
  }
  // useEffect(() => {});

  return (
    <div>
      <h1>Tekst</h1>
      <p>{timer} sec</p>
      <button onClick={handleStopStart}>{isRunning ? 'Stop' : 'Start'}</button>

      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};
