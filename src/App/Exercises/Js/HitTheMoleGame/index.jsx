import './styles.css';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { Label, Button, Output, Results } from './Components';
import { useState } from 'react';
import { formatTime } from './Utilities';
import { GameBoard } from './Features/GameBoard';
import { MoleTimer } from './Features/MoleTimer';

const MINUTE = 6000; //1 min in mls
const DURATIONS = [
  { label: '1 minuta', duration: MINUTE + 400 },
  { label: '2 minuty', duration: MINUTE * 2 + 400 },
  { label: '3 minuty', duration: MINUTE * 3 + 400 },
];

const MOLES = [
  { label: '1 kret', molesNo: 1, tiles: 10, timeVisible: 1000 },
  { label: '2 krety', molesNo: 2, tiles: 15, timeVisible: 1500 },
  { label: '3 krety', molesNo: 3, tiles: 20, timeVisible: 2000 },
];

export const HitTheMoleGame = () => {
  // console.log('Hit the mole game component renedered');
  const [duration, setDuration] = useState();
  const [prevDuration, setPrevDuration] = useState();
  const [molesOption, setMolesOption] = useState();
  const [status, setStatus] = useState('notStarted');
  const [score, setScore] = useState();
  const [showWarning, setShowWarning] = useState(false);
  const [tiles, setTiles] = useState([]);

  function getInitialTiles(molesOption) {
    return new Array(molesOption.tiles)
      .fill(0)
      .map((tile, index) => ({ index }));
  }

  function handleStart() {
    // const validation = settingsValidation();
    if (duration && molesOption) {
      setStatus('started');
      setShowWarning(false);
      setPrevDuration(duration);
      setTiles(getInitialTiles(molesOption));
      setScore(0);
    } else {
      setShowWarning(true);
    }
  }

  function handleStop() {
    setStatus('notStarted');
    setDuration(undefined);
    setMolesOption(undefined);
  }

  function handleFinish() {
    setStatus('finished');
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
            <Label>Czas gry</Label>
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
            <Label>Liczba kretów</Label>
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
            <Label>Przyciski sterujące</Label>
            <Button value="Start" onClick={() => handleStart()} />
          </div>
        </>
      )}
      {status === 'started' && (
        <>
          <div className="mole-controls-panel">
            <Label>Czas do końca</Label>
            <Output>
              <MoleTimer duration={duration} handleFinish={handleFinish} />
            </Output>
          </div>
          <div className="mole-controls-panel">
            <Label>Wynik</Label>
            <Output>{score}</Output>
          </div>
          <div className="mole-controls-panel">
            <Label>Przyciski sterujące</Label>
            <Button
              value="Stop"
              variant="tertiary"
              onClick={() => handleStop()}
            />
          </div>
          {status === 'started' && (
            <GameBoard
              tiles={tiles}
              setScore={setScore}
              molesOption={molesOption}
            />
          )}
        </>
      )}
    </div>
  );
};
