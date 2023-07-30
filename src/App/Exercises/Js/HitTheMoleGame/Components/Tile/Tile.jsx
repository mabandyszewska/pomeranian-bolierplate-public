import './styles.css';

export const Tile = ({ hasMole, variant = 'neutral', onClick }) => {
  if (
    !(variant === 'correct' || variant === 'incorrect' || variant === 'neutral')
  ) {
    console.log('błędny parametr variant', variant);
  }

  let moleClass = '';
  if (hasMole) {
    moleClass = 'mole-tile--has-mole';
  }

  return (
    <div
      className={`mole-tile mole-tile--${variant} ${moleClass}`}
      onClick={onClick}
    />
  );
};
