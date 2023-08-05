import { useEffect, useState } from 'react';
import { Tile } from './Tile/Tile';
// import { useMolePosition } from './UseMolePosition';
import { useMolePositions } from './UseMolePositions';
// import { getNewMolePosition } from '../Utilities';

const HIGHLIGHT_TIME = 500;

export function GameBoard({ tiles, setScore, molesOption }) {
  // console.log('GameBoard component rendered');
  const [correct, setCorrect] = useState();
  const [incorrect, setIncorrect] = useState();
  const [molePositions, moveRandomly] = useMolePositions(molesOption);

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

  function handleTileClick(index) {
    if (
      molePositions &&
      molePositions.some((position) => {
        return position === index;
      })
    ) {
      setScore((prev) => prev + 1);
      setCorrect(index);
      moveRandomly(index);
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
          hasMole={
            molePositions &&
            molePositions.some((position) => {
              return position === index;
            })
          }
          variant={getTileVariant(index)}
        />
      ))}
    </div>
  );
}
