import { useEffect, useState } from 'react';
import { formatTime } from '../Utilities';

export function MoleTimer({ duration, handleFinish }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    let timeoutId;
    timeoutId = setInterval(() => setTimeLeft((prev) => prev - 100), 100);
    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleFinish();
    }
  }, [handleFinish, timeLeft]);

  return formatTime(timeLeft);
}
