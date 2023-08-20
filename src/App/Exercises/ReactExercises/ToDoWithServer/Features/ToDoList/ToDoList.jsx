import './style.css';
import { Button } from '../../Components';
import { useState } from 'react';
import { useEffect } from 'react';
import { ToDoCard } from '../ToDoCard/ToDoCard';
import { LocalDevApiClient } from '../../../../../ApiClients/LocalDevApiClient';

const BASE_URL = 'http://localhost:3333/';
const apiClient = new LocalDevApiClient({ baseUrl: BASE_URL });

export const ToDoList = ({ handleAddToDo, handleEdit }) => {
  const [todos, setTodos] = useState([]);
  const [isGetListError, setIsGetListError] = useState(false);
  const [markAsDoneErrors, setMarkAsDoneErrors] = useState([]);
  const [deleteErrors, setDeleteErrors] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const promise = apiClient.getAllToDos(controller.signal);
    updateToDos(promise);
    return () => controller.abort();
  }, []);

  const updateToDos = (promise) => {
    promise
      .then((data) => {
        setTodos(data);
        setIsGetListError(false);
      })
      .catch((error) => {
        console.log('BŁĄD:', error);
        setIsGetListError(true);
        setTodos([]);
      });
  };

  const handleRefresh = () => {
    const promise = apiClient.getAllToDos();
    updateToDos(promise);
  };

  const handleMarkAsDone = (id) => {
    apiClient
      .markAsDone(id)
      .then((newToDo) =>
        setTodos((currentTodos) =>
          currentTodos.map((todo) => (todo.id === id ? newToDo : todo))
        )
      )
      .catch((error) => {
        console.log(error);
        setMarkAsDoneErrors((errors) => [...errors, id]);
      });
  };

  useEffect(() => {
    if (markAsDoneErrors.length > 0) {
      setTimeout(() => setMarkAsDoneErrors([]), 1000);
    }
  }, [markAsDoneErrors]);

  const handleDelete = async (id) => {
    apiClient
      .deleteToDo(id)
      .then(() => {
        setTodos((currentTodos) => {
          return currentTodos.filter((todo) => todo.id !== id);
        });
      })
      .catch((error) => {
        console.log(error);
        setDeleteErrors((errors) => [...errors, id]);
      });
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
            handleEdit={() => handleEdit(todo.id)}
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
