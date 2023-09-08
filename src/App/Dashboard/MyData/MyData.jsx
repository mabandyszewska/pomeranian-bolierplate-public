import { RoundImage } from '../../Components/RoundImage/RoundImage';

export const MyData = () => {
  return (
    <div className="dashboard-about-me">
      <RoundImage size="100px" />
      <div className="person">
        <p>Marta Bandyszewska</p>
        <p>Wejherowo, Poland</p>
      </div>
      <div className="email-container">
        <p>e-mail:</p>
        <p>bandyszewska.marta@gmail.com</p>

        <div className="telephone-container">
          <p>phone:</p>
          <p>(+48) 509 793 401</p>
        </div>
      </div>
    </div>
  );
};
