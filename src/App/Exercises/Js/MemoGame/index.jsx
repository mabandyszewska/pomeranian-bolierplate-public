import { useEffect, useState } from 'react';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { Label, Button, Output, Results } from './Components';
import { Tile } from './Features/Tile/Tile';

import './styles.css';
import { formatTime, getAlphabet } from './Utilities';

const ELEMENTS = [2, 16, 20];
// const LETTERS = [...'ABCDEFGHIJ'];
const characters = getAlphabet(10);

export const MemoGame = () => {
  // console.log(LETTERS.map((char) => char.charCodeAt(0)));
  // console.log(charachters);

  const [status, setStatus] = useState('notStarted'); // notStarted || started || passed || finished
  const [tiles, setTiles] = useState([]);
  const [noOfElements, setNoOfElements] = useState();
  const [prevNoOfElements, setPrevNoOfElements] = useState();
  const [showWarning, setShowWarning] = useState(false);
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  const [found, setFound] = useState(0);
  const [resultMessage, setResultMessage] = useState();
  const [fisrtClick, setFirstClick] = useState();
  const [secondClick, setSecondClick] = useState();

  function getInitialTiles(size) {
    const charactersSubset = characters.slice(0, size / 2);
    const allCharacters = [...charactersSubset, ...charactersSubset];
    const characterObject = allCharacters.map((character, index) => {
      return { index, value: character };
    });
    console.log(characterObject);
    return characterObject;
  }

  function handleStart() {
    if (noOfElements !== undefined) {
      setStatus('started');
      setTiles(getInitialTiles(noOfElements));
      setShowWarning(false);
      setScore(0);
      setTime(0);
    } else {
      setShowWarning(true);
    }
  }

  function handlePass() {
    setStatus('passed');
    setNoOfElements(undefined);
  }

  function handleTileClicked() {
    setScore((prev) => prev + 1);
  }
  useEffect(() => {
    let intervalId;
    if (status === 'started') {
      intervalId = setInterval(
        () => setTime((prevTime) => prevTime + 1000),
        1000
      );
    }
    return () => clearInterval(intervalId);
  }, [status]);

  return (
    <div>
      <MasterHeader value="Memo" />
      <p>
        Status: {status} Liczba elementów: {noOfElements}
      </p>
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary.
      </p>
      <div>
        {(status === 'passed' || status === 'finished') && (
          <Results>Gratulacje! Twój wynik to 8 par w czasie 0:56!</Results>
        )}
      </div>

      {showWarning && <p className="mole-warning">Brakuje ustawień gry</p>}

      {status !== 'started' && (
        <>
          <div className="memo-controls-panel">
            <Label>Liczba elementów</Label>
            {ELEMENTS.map((element) => (
              <Button
                key={element}
                value={element + ' elementów'}
                onClick={() => setNoOfElements(element)}
                variant={element !== noOfElements ? 'primary' : 'secondary'}
              />
            ))}
          </div>
          <div className="memo-controls-panel">
            <Label>Przyciski sterujące</Label>
            <Button value="Start" onClick={() => handleStart()} />
          </div>
        </>
      )}
      {status === 'started' && (
        <>
          <div className="memo-controls-panel">
            <Label>Czas gry</Label>
            <Output>{formatTime(time)}</Output>
          </div>
          <div className="memo-controls-panel">
            <Label>Liczba ruchów</Label>
            <Output>{score}</Output>
          </div>
          <div className="memo-controls-panel">
            <Label>Przyciski sterujące</Label>
            <Button
              value="Pass"
              variant="tertiary"
              onClick={() => handlePass()}
            />
          </div>
        </>
      )}
      {status === 'started' && (
        <div className="memo-game-panel">
          {tiles.map(({ index, value }) => (
            <Tile key={index} value={value} onClick={handleTileClicked} />
          ))}
        </div>
      )}
    </div>
  );
};
