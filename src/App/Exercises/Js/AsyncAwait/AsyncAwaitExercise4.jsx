import { useEffect, useState } from 'react';
import './styles.css';

export function AsyncAwaitExercise4() {
  const [result, setResult] = useState();

  const getResult = () => {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve("I'm resolved");
      }, 5000);
    });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getResult();
        setResult(data);
        console.log('wynik', data);
      } catch (error) {
        setResult(error);
      } finally {
        console.log('Finished');
      }
    }
    fetchData();
  }, []);

  return (
    <div className="promise-excercise">
      <h3>Async Await Example 4 - przykład z useEffect</h3>
      <div>Result: {result}</div>
    </div>
  );
}
