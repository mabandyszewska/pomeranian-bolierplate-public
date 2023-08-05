import { useEffect, useState, useCallback } from 'react';
import { getNewMolePosition } from '../Utilities';

export function useMolePosition(molesOption) {
  const [molePosition, setMolePosition] = useState();

  useEffect(() => {
    setMolePosition(getNewMolePosition(undefined, molesOption.tiles));
  }, [molesOption]);

  useEffect(() => {
    if (molesOption === undefined) return;
    let timeoutId;
    // console.time('mole-position');
    // console.timeEnd('mole-position');

    if (molePosition !== undefined) {
      timeoutId = setTimeout(
        () =>
          setMolePosition(getNewMolePosition(molePosition, molesOption.tiles)),
        molesOption.timeVisible
      );
    }
    return () => clearTimeout(timeoutId);
  }, [molePosition, molesOption]);

  const moveRandomly = useCallback(
    (index) => {
      setMolePosition(getNewMolePosition(index, molesOption.tiles));
    },
    [molesOption]
  );

  return [molePosition, moveRandomly];
}
