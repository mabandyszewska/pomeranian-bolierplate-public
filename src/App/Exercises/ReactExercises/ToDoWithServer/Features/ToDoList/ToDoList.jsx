import './style.css';
import { Button } from '../../Components';
import { useState } from 'react';
import { useEffect } from 'react';
import { ToDoCard } from '../ToDoCard/ToDoCard';
const BASE_URL = 'http://localhost:3333/';
// const TODOS = [
//   {
//     id: 1,
//     title: 'Todo 1',
//     createdAt: '2021-05-22T11:20:22.935Z',
//     author: 'Anonymous',
//     isDone: true,
//     doneDate: '2021-05-22T11:20:22.935Z',
//     note: 'Done the course',
//   },
//   {
//     id: 3,
//     title: 'Todo 18',
//     note: 'Poprowadzić kurs',
//     author: 'NowyNikolas',
//     isDone: false,
//     createdAt: '2023-08-19T08:34:38.228Z',
//   },
//   {
//     id: 4,
//     title: 'AddButton',
//     note: 'newTODO',
//     author: 'Nikolas',
//     isDone: false,
//     createdAt: '2023-08-19T10:29:26.739Z',
//   },
//   {
//     id: 5,
//     title: 'AddButton',
//     note: 'newTODO',
//     author: 'Nikolas',
//     isDone: false,
//     createdAt: '2023-08-19T10:31:00.158Z',
//   },
// ];

export const ToDoList = ({ handleAddToDo }) => {
  const [todos, setTodos] = useState([]);
  const [isGetListError, setIsGetListError] = useState(false);
  const [markAsDoneErrors, setMarkAsDoneErrors] = useState([]);
  const [deleteErrors, setDeleteErrors] = useState([]);

  const getAllToDos = async () => {
    const requestPass = BASE_URL + 'api/todo/';
    try {
      const response = await fetch(requestPass);
      if (!response.ok) throw new Error(response.status);
      const data = await response.json();
      setTodos(data);
      setIsGetListError(false);
    } catch (error) {
      setIsGetListError(true);
      setTodos([]);
    }
  };

  useEffect(() => {
    getAllToDos();
  }, []);

  const handleRefresh = () => {
    getAllToDos();
  };

  const handleMarkAsDone = (id) => {
    const success = Math.random() > 0.5;
    if (success) {
      setTodos((currentTodos) => {
        return currentTodos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              isDone: true,
              doneDate: new Date().toISOString(),
            };
          } else {
            return todo;
          }
        });
      });
    } else {
      setMarkAsDoneErrors((errors) => [...errors, id]);
    }
  };

  useEffect(() => {
    if (markAsDoneErrors.length > 0) {
      setTimeout(() => setMarkAsDoneErrors([]), 1000);
    }
  }, [markAsDoneErrors]);

  const handleDelete = async (id) => {
    const requestPath = `api/todo/${id}`;
    const headers = { 'Content-Type': 'application/json' };
    const options = { headers, method: 'DELETE' };
    try {
      const respons = await fetch(BASE_URL + requestPath, options);
      if (!respons.ok) throw new Error(respons.status);
      // const data = await respons.json();
      // console.log(data);
      setTodos((currentTodos) => {
        return currentTodos.filter((todo) => todo.id !== id);
      });
    } catch (error) {
      setDeleteErrors((errors) => [...errors, id]);
    }
  };

  useEffect(() => {
    if (deleteErrors.length > 0) {
      setTimeout(() => setDeleteErrors([]), 1000);
    }
  }, [deleteErrors]);

  return (
    <div className="todo-list">
      <p>Tutaj znajdziesz listę swoich zadań.</p>
      <div className="todo-list-container">
        {todos.map((todo) => (
          <ToDoCard
            key={todo.id}
            todo={todo}
            handleMarkAsDone={() => handleMarkAsDone(todo.id)}
            handleDelete={() => handleDelete(todo.id)}
            isDeleteError={deleteErrors.some((errorId) => errorId === todo.id)}
            isMarkAsDoneError={markAsDoneErrors.some(
              (errorId) => errorId === todo.id
            )}
          />
        ))}
        {isGetListError && (
          <>
            <p>Przepraszamy, nie udało się pobrać listy zadań.</p>
            <Button onClick={handleRefresh}>Odśwież widok</Button>
          </>
        )}
        {!isGetListError && todos.length === 0 && (
          <>
            <p>Przepraszamy, nie udało się pobrać listy zadań.</p>
            <Button onClick={handleAddToDo}>Dodaj zadanie</Button>
          </>
        )}
        {todos.length > 0 && (
          <>
            <Button onClick={handleAddToDo}>Dodaj</Button>
          </>
        )}
      </div>
    </div>
  );
};
