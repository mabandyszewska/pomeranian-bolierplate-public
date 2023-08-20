import './style.css';
import React, { useState } from 'react';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { ToDoForm } from './Features/ToDoForm/ToDoForm';
import { ToDoList } from './Features/ToDoList/ToDoList';

export function ToDoWithServer() {
  //statusy: list / add / edit
  const [state, setState] = useState('list');

  const handleAddToDo = () => {
    setState('add');
  };
  const handleGoBack = () => {
    setState('list');
  };

  return (
    <div className="todo">
      <MasterHeader value="TODO" />
      {state === 'list' && <ToDoList handleAddToDo={handleAddToDo} />}
      {state === 'add' && <ToDoForm handleGoBack={handleGoBack} />}
    </div>
  );
}
