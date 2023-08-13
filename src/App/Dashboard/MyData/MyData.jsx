import { RoundImage } from '../../Components/RoundImage/RoundImage';

export const MyData = () => {
  return (
    <div className="dashboard-about-me">
      <RoundImage />
      <div className="person"></div>
      <p>Marta Bandyszewska</p>
      <p>Wejherowo</p>
      <div className="email-container">
        <p>email:</p>
        <p>bandyszewska.marta@gmail.com</p>

        <div className="telephone-container">
          <p>telefon:</p>
          <p>(+48) 509 793 401</p>
        </div>
      </div>
    </div>
  );
};
