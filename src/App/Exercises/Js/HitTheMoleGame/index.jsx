import './styles.css';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { Label, Button, Output, Results, Tile } from './Components';
import { useState, useEffect } from 'react';
import { formatTime, getNewMolePosition } from './Utilities';

const MINUTE = 5000; //1 min in mls
const HIGHLIGHT_TIME = 500;
const DURATIONS = [
  { label: '1 minuta', duration: MINUTE + 400 },
  { label: '2 minuty', duration: MINUTE * 2 + 400 },
  { label: '3 minuty', duration: MINUTE * 3 + 400 },
];

const MOLES = [
  { label: '1 kret', molesNo: 1, tiles: 10, timeVisible: 10000 },
  { label: '2 krety', molesNo: 2, tiles: 15, timeVisible: 500 },
  { label: '3 krety', molesNo: 3, tiles: 20, timeVisible: 350 },
];

export const HitTheMoleGame = () => {
  const [duration, setDuration] = useState();
  const [prevDuration, setPrevDuration] = useState();
  const [molesOption, setMolesOption] = useState();
  const [status, setStatus] = useState('notStarted');
  const [timeLeft, setTimeLeft] = useState();
  const [score, setScore] = useState();
  const [showWarning, setShowWarning] = useState(false);
  const [tiles, setTiles] = useState([]);
  const [intervalId, setIntervalId] = useState();
  const [molePosition, setMolePosition] = useState();
  const [correct, setCorrect] = useState();
  const [incorrect, setIncorrect] = useState();

  function startCountdown() {
    const id = setInterval(() => setTimeLeft((prev) => prev - 100), 100);
    setIntervalId(id);
  }

  // new
  useEffect(() => {
    if (timeLeft <= 0) {
      clearInterval(intervalId);
      setStatus('finished');
      setDuration(undefined);
      setMolesOption(undefined);
    }
  }, [intervalId, timeLeft]);

  function getInitialTiles(molesOption) {
    return new Array(molesOption.tiles)
      .fill(0)
      .map((tile, index) => ({ index }));
  }

  // function settingsValidation() {
  //   if (duration > 0 && molesOption > 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  function handleTileClick(index) {
    if (molePosition === index) {
      setScore((prev) => prev + 1);
      setCorrect(index);
      setMolePosition(getNewMolePosition(index, molesOption.tiles));
    } else {
      setIncorrect(index);
      setScore((prev) => prev - 1);
    }
  }

  useEffect(() => {
    let timeoutId;
    if (correct !== undefined) {
      timeoutId = setTimeout(() => setCorrect(undefined), HIGHLIGHT_TIME);
    }
    return () => clearTimeout(timeoutId);
  }, [correct]);

  useEffect(() => {
    let timeoutId;
    if (incorrect !== undefined) {
      timeoutId = setTimeout(() => setIncorrect(undefined), HIGHLIGHT_TIME);
    }
    return () => clearTimeout(timeoutId);
  }, [incorrect]);

  function getTileVariant(index) {
    if (index === correct) return 'correct';
    if (index === incorrect) return 'incorrect';
    return 'neutral';
  }

  function handleStart() {
    // const validation = settingsValidation();
    if (duration && molesOption) {
      setStatus('started');
      setShowWarning(false);
      setTimeLeft(duration);
      setPrevDuration(duration);
      setTiles(getInitialTiles(molesOption));
      setScore(0);
      startCountdown();
      setMolePosition(getNewMolePosition(molePosition, molesOption.tiles));
    } else {
      setShowWarning(true);
    }
  }

  function handleStop() {
    setStatus('notStarted');
    clearInterval(intervalId); // new
    setDuration(undefined);
    setMolesOption(undefined);
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
          <Results duration={formatTime(prevDuration)} score={score} />
        )}
      </div>
      {/* <p>
        Duration: {duration}, Moles: {molesOption && molesOption.molesNo},
        Status: {status}, Tiles:
        {JSON.stringify(tiles)}
      </p> */}
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
                onClick={() => setMolesOption(value)}
                variant={
                  molesOption &&
                  (value.molesNo !== molesOption.molesNo
                    ? 'primary'
                    : 'secondary')
                }
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
              onClick={() => handleStop()}
            />
          </div>
          <div className="mole-game-panel">
            {status === 'started' &&
              tiles.map(({ index }) => (
                <Tile
                  key={index}
                  onClick={() => handleTileClick(index)}
                  hasMole={index === molePosition}
                  variant={getTileVariant(index)}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};
