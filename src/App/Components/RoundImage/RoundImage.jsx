import './styles.css';

export const RoundImage = ({ size = '50px' }) => {
  return (
    <div
      className="round-image"
      style={{ borderRadius: '100%', width: size, height: size }}
    />
  );
};
