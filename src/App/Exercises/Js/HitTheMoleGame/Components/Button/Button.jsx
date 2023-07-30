import './styles.css';

export const Button = ({ value, variant = 'primary', onClick }) => {
  if (
    !(
      variant === 'primary' ||
      variant === 'secondary' ||
      variant === 'tertiary'
    )
  ) {
    console.log('błędny parametr variant', variant);
  }

  return (
    <button className={`mole-btn mole-btn--${variant}`} onClick={onClick}>
      {value}
    </button>
  );
};
