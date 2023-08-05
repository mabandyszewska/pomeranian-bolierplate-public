import { useEffect, useState } from 'react';
import { Tile } from '../Components';
import { getNewMolePosition } from '../Utilities';

const HIGHLIGHT_TIME = 500;

export function GameBoard({ tiles, setScore, molesOption }) {
  const [correct, setCorrect] = useState();
  const [incorrect, setIncorrect] = useState();
  const [molePosition, setMolePosition] = useState();

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

  useEffect(() => {
    if (molesOption === undefined) return;
    let timeoutId;
    console.time('mole-position');
    console.timeEnd('mole-position');

    if (molePosition !== undefined) {
      timeoutId = setTimeout(
        () =>
          setMolePosition(getNewMolePosition(molePosition, molesOption.tiles)),
        molesOption.timeVisible
      );
    }
    return () => clearTimeout(timeoutId);
  }, [molePosition, molesOption]);

  useEffect(() => {
    setMolePosition(getNewMolePosition(undefined, molesOption.tiles));
  }, [molesOption]);

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

  function getTileVariant(index) {
    if (index === correct) return 'correct';
    if (index === incorrect) return 'incorrect';
    return 'neutral';
  }

  return (
    <div className="mole-game-panel">
      {tiles.map(({ index }) => (
        <Tile
          key={index}
          onClick={() => handleTileClick(index)}
          hasMole={index === molePosition}
          variant={getTileVariant(index)}
        />
      ))}
    </div>
  );
}
