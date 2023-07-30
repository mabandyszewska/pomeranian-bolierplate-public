import './styles.css';

export const Results = ({ score, duration }) => {
  return (
    <span className="mole-results">{`Gratulację! Twój wynik to ${score} złapane krety w czasie ${duration}!`}</span>
  );
};
