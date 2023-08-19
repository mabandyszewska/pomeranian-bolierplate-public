import React from 'react';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { ToDoForm } from './Features/ToDoForm';
import './style.css';

export function ToDoWithServer() {
  return (
    <div className="todo">
      <MasterHeader value="TODO" />
      <p>Tutaj znajdziesz listę swoich zadań.</p>
      <ToDoForm />
    </div>
  );
}
