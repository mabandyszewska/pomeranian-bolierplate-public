import './styles.css';

import { RoundImage } from '../RoundImage/RoundImage';
import { SettingIcon } from '../Icons/SettingIcon';
import { ChevronDownIcon } from '../Icons/ChevronDownIcon';

export const HeaderMenu = () => {
  return (
    <div className="image-container">
      <SettingIcon />

      {/* wykorzystać komponent RoundImage */}
      <div className="circular_image">
        <RoundImage />
      </div>

      <div className="name-surname-cntainer">
        <h4>Marta Bandyszewska</h4>
        <h5>Test</h5>
      </div>

      <ChevronDownIcon className="menu-arrow" />
    </div>
  );
};
