import './styles.css';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { Label, Button, Output, Results, Tile } from './Components';
import { useState, useEffect } from 'react';
import { JavascriptOutlined } from '@mui/icons-material';

const MINUTE = 60000; //1 min in mls
const DURATIONS = [
  { label: '1 minuta', duration: MINUTE },
  { label: '2 minuty', duration: MINUTE * 2 },
  { label: '3 minuty', duration: MINUTE * 3 },
];

const MOLES = [
  { label: '1 kret', molesNo: 1, tiles: 10, timeVisible: 10000 },
  { label: '2 krety', molesNo: 2, tiles: 15, timeVisible: 500 },
  { label: '3 krety', molesNo: 3, tiles: 20, timeVisible: 350 },
];

export const HitTheMoleGame = () => {
  const [duration, setDuration] = useState();
  const [molesNo, setMolesNo] = useState();
  const [status, setStatus] = useState('notStarted');
  const [timeLeft, setTimeLeft] = useState();
  const [score, setScore] = useState();
  const [showWarning, setShowWarning] = useState(false);
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    if (status === 'notStarted') {
      setTimeLeft(0);
    }
    if (status === 'started') {
      setTimeLeft(duration);
      setTiles(getInitialTiles(molesNo));
    }
    if (status !== 'finished') {
      setScore(0);
    }
    console.log('status się zmienił', status);
  }, [status, duration]);

  function getInitialTiles(molesNumber) {
    const tiles = MOLES.find((mole) => mole.molesNo === molesNumber).tiles;
    return new Array(tiles).fill(0);
  }

  function formatTime(time) {
    const timeInSeconds = Math.round(time / 1000);
    const timeInMinutes = Math.round(timeInSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.round(timeInSeconds % 60)
      .toString()
      .padStart(2, '0');

    return `${timeInMinutes}:${seconds}`;
  }

  function settingsValidation() {
    if (duration > 0 && molesNo > 0) {
      return false;
    } else {
      return true;
    }
  }

  function handleStart() {
    const validation = settingsValidation();
    if (validation === false) {
      setStatus('started');
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  }

  return (
    <div>
      <MasterHeader value="Kret" />
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>
      <div>
        {status === 'finished' && (
          <Results duration={formatTime(duration)} score={score} />
        )}
      </div>
      <p>Duration: {duration}</p>
      <p>Moles: {molesNo}</p>
      <p>Status: {status}</p>
      <p>Tiles: {JSON.stringify(tiles)}</p>
      {showWarning && <p className="mole-warning">Brakuje ustawień gry</p>}
      {status !== 'started' && (
        <>
          <div className="mole-controls-panel">
            <Label value="Czas gry" />
            {DURATIONS.map((value) => (
              <Button
                key={value.label}
                value={value.label}
                onClick={() => setDuration(value.duration)}
                variant={value.duration !== duration ? 'primary' : 'secondary'}
              />
            ))}
          </div>
          <div className="mole-controls-panel">
            <Label value="Liczba kretów" />
            {MOLES.map((value) => (
              <Button
                key={value.molesNo}
                value={value.label}
                onClick={() => setMolesNo(value.molesNo)}
                variant={value.molesNo !== molesNo ? 'primary' : 'secondary'}
              />
            ))}
          </div>
          <div className="mole-controls-panel">
            <Label value="Przyciski sterujące" />
            <Button value="Start" onClick={() => handleStart()} />
          </div>
        </>
      )}
      {status === 'started' && (
        <>
          <div className="mole-controls-panel">
            <Label value="Czas do końca" />
            <Output value={formatTime(timeLeft)} />
          </div>
          <div className="mole-controls-panel">
            <Label value="Wynik" />
            <Output value={score} />
          </div>
          <div className="mole-controls-panel">
            <Label value="Przyciski sterujące" />
            <Button
              value="Stop"
              variant="tertiary"
              onClick={() => setStatus('notStarted')}
            />
          </div>
          <div className="mole-game-panel">
            <Tile />
            <Tile hasMole variant="neutral" />
            <Tile variant="correct" />
            <Tile hasMole variant="incorrect" />
            <Tile />
            <Tile hasMole />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
          </div>
        </>
      )}
    </div>
  );
};
