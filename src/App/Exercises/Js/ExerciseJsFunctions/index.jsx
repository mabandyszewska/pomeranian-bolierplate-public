import './styles.css';

function fib(n) {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

export function Exercise() {
  return (
    <div>
      <ul>
        <li>
          napisz funkcje sortImmute, ktora przyjmuje jako parametr tablice cyfr
          i zwraca ją posortowana
        </li>
        <li>
          napisz funkcję która jako parametr przyjmuje obiekt przechodzi po
          wszystkich jego polach i kapitalizuje im pierwszą literę
        </li>
        <li>
          napisz funkcję która jako parametr przyjmuje tablicę obiektów
          natomiast zwraca tablicę z wyliczoną wartością średnią zamiast ocen
        </li>
        <li>
          stwórz funkcję, która przyjmuje dowolną liczbę argumentów za pomocą
          "...args" i zwraca ich sumę
        </li>
        <div> args: </div>
        <li>
          funkcja zwraca podany w argumencie element ciągu Fibonacciego -
          rekurencyjnie
        </li>
        <div> fib: {fib(5)}</div>
        <div> fib: {fib(6)}</div>
        <div> fib: {fib(7)}</div>
        <div> fib: {fib(-5)}</div>
      </ul>
    </div>
  );
}
