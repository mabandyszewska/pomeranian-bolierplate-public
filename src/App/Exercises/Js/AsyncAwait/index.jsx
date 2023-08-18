import { PromisyExample1 } from './PromisyExample1';
import { PromisyExample2 } from './PromisyExample2';
import { PromisyExample3 } from './PromisyExample3';
import { TryCatchFinally } from './TryCatchFinally';
import { PromiseExercise } from './PromiseExercise';
import { PromiseMethods } from './PromiseMethods';
import { AsyncAwaitExercise } from './AsyncAwaitExercise';
import { AsyncAwaitExercise2 } from './AsyncAwaitExercise2';
import { AsyncAwaitExercise3 } from './AsyncAwaitExercise3';
import { AsyncAwaitExercise4 } from './AsyncAwaitExercise4';
import { AsyncAwaitExercise5 } from './AsyncAwaitExercise5';
import './styles.css';

export const AsyncAwait = () => {
  return (
    <div>
      <h1>Powtórka z poprzednich zajęć</h1>
      <h2>Powtórka z poprzednich zajęć</h2>
      <PromisyExample1 />
      <PromisyExample2 />
      <PromisyExample3 />
      <TryCatchFinally />
      <PromiseExercise />
      <PromiseMethods />
      <h2>Async Await Teoria</h2>
      <AsyncAwaitExercise />
      <AsyncAwaitExercise2 />
      <AsyncAwaitExercise3 />
      <h2>Async Await Praktyka</h2>
      <AsyncAwaitExercise4 />
      <AsyncAwaitExercise5 />
    </div>
  );
};
