import './styles.css';
import { SettingIcon } from '../Icons/SettingIcon';
import { ChevronDownIcon } from '../Icons/ChevronDownIcon';

export const HeaderMenu = () => {
  return (
    <div className="image-container">
      <SettingIcon />

      {/* wykorzystać komponent RoundImage */}
      <div className="circular_image">
        <img
          src="http://placekitten.com/500/500"
          className="logo"
          alt="kitten"
        />
      </div>

      <div className="name-surname-cntainer">
        <h4>Marta Bandyszewska</h4>
        <h5>Test</h5>
      </div>

      <ChevronDownIcon className="menu-arrow" />
    </div>
  );
};
