import './style.css';
import { MarkAsDoneIcon } from '../ToDoImages/MarkAsDoneIcon';
import { DeleteIcon } from '../ToDoImages/DeleteIcon';
import { formatDate } from '../../Utilities/formatDate';
import { EditIcon } from '../ToDoImages/EditIcon';

const ERROR_MESSAGE = 'nie udało się ukończyć';

export const ToDoCard = ({
  todo,
  handleMarkAsDone,
  handleDelete,
  isDeleteError,
  isMarkAsDoneError,
  handleEdit,
}) => {
  const { title, createdAt, author, note, doneDate, isDone } = todo;

  return (
    <div className={`todo-card ${isDone && 'todo-card--done'}`}>
      <div className="todo-card--details">
        <h2 className="todo-card--title">{title}</h2>
        <p className="todo-card--author">{author}</p>
        <p className="todo-card--date">{formatDate(createdAt)}</p>
        <p className="todo-card--note">{note}</p>
      </div>
      <div className="todo-card--aside">
        <div className="todo-card--controls">
          {!isDone && (
            <MarkAsDoneIcon
              className={`todo-card--markAsDoneIcon ${
                isMarkAsDoneError && 'todo-card--markAsDoneError'
              }`}
              onClick={handleMarkAsDone}
            />
          )}
          <EditIcon onClick={handleEdit} />
          <DeleteIcon
            className={`todo-card--deleteIcon ${
              isDeleteError && 'todo-card--deleteIconError'
            }`}
            onClick={handleDelete}
          />
        </div>
        <div className="todo-card--message">
          {(isMarkAsDoneError || isDeleteError) && ERROR_MESSAGE}
        </div>
        <div className="todo-card--status">
          {isDone && (
            <>
              <MarkAsDoneIcon className="todo-card--markAsDoneIconDone" />
              <div className="todo-card--doneDate ">{formatDate(doneDate)}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
