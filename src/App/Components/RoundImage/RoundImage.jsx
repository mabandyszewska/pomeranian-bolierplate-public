import './styles.css';

export const RoundImage = ({ size }) => {
  return (
    <div
      className="round-image"
      style={{ borderRadius: '100%', width: 'size', height: 'size' }}
    />
  );
};
