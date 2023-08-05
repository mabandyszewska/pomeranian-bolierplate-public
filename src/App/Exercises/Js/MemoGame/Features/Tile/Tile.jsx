import './styles.css';

export const Tile = ({ hasMemo, variant = 'neutral', onClick, value }) => {
  if (
    !(variant === 'correct' || variant === 'incorrect' || variant === 'neutral')
  ) {
    console.log('błędny parametr variant', variant);
  }

  let memoClass = '';
  if (hasMemo) {
    memoClass = 'mole-tile--has-mole';
  }

  return (
    <div
      className={`memo-tile memo-tile--${variant} ${memoClass}`}
      onClick={onClick}
    >
      {value}
    </div>
  );
};
