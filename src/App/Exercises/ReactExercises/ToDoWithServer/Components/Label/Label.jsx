import './style.css';

export const Label = ({ htmlFor, children }) => {
  return (
    <label className={'todo-form--label'} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
