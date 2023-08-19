import './style.css';

export const Input = ({ id, value, placeholder }) => {
  return (
    <input
      className={'todo-form--input'}
      id={id}
      value={value}
      placeholder={placeholder}
      type="text"
    />
  );
};
