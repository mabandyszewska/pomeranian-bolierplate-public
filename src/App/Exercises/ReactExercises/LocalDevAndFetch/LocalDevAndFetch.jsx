import './style.css';
import { useEffect, useState } from 'react';

export function LocalDevAndFetch() {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    async function fetchToDos() {
      const results = await fetch('http://localhost:3333/api/todo');
      if (results.ok) {
        const data = await results.json();
        console.log(data);
        setToDoList(data);
      }
    }
    fetchToDos();
  }, []);

  return (
    <div>
      <a href="https://kursjs.pl/kurs/ajax/fetch">Fetch documentation</a>

      <p>
        Składnia fetch ma postać: <span>fetch(url, [options])</span>
      </p>
      <p>
        Jedynym wymaganym parametrem jest adres na ktory się łączymy. Jeżeli
        pominiemy dodatkowe opcje, domyślnie będzie wykonywane połączenie typu
        GET, które będzie służyć do pobrania danych. Po odpaleniu, fetch zwraca
        obietnicę.
      </p>

      <h2>Todo List</h2>
      <div className="table-todo-container">
        <table className="styled-todo-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tytuł</th>
              <th>Notatka</th>
              <th>Autor</th>
            </tr>
          </thead>
          <tbody>
            {toDoList.map((listItem) => (
              <tr key={listItem.id}>
                <td>{listItem.id}</td>
                <td>{listItem.title}</td>
                <td>{listItem.note}</td>
                <td>{listItem.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="add-todo-button">Dodaj zadanie</button>
    </div>
  );
}
