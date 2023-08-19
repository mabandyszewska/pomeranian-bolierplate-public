import './style.css';

export const TextAreaInput = ({ id, value, placeholder }) => {
  return (
    <textarea
      className="todo-form--input todo-form--textarea"
      id={id}
      value={value}
      placeholder={placeholder}
      type="text"
    />
  );
};
