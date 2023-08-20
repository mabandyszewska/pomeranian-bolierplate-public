import './style.css';

export const TextAreaInput = ({ onChange, id, value, placeholder }) => {
  return (
    <textarea
      className="todo-form--input todo-form--textarea"
      id={id}
      value={value}
      placeholder={placeholder}
      type="text"
      onChange={onChange}
    />
  );
};
