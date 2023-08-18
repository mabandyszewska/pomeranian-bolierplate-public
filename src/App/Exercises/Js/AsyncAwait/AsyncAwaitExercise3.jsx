import { useEffect, useState } from 'react';
import './styles.css';

const getSomeResults = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) resolve('Success');
      if (!success) reject('Rejected');
    }, 1000);
  });
};

export function AsyncAwaitExercise3() {
  const [promiseResult, setPromiseResult] = useState('empty');
  //const [reset, setReset] = useState(0); coś z buttonem + w useEffect ma śledzić reset

  useEffect(() => {
    async function handle() {
      try {
        const data = await getSomeResults();
        setPromiseResult(data);
      } catch (error) {
        setPromiseResult(error);
      } finally {
        console.log('zakończono');
      }
    }
    handle();
  }, []);

  return (
    <div className="promise-excercise">
      <h3>Async Await Example 3 - przykład z useEffect</h3>
      <button type="button" onClick={() => {}}>
        Start
      </button>
      <button type="button" onClick={() => setPromiseResult('clean')}>
        Clear
      </button>
      <div>result:{promiseResult}</div>
    </div>
  );
}
