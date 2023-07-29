//import { isVisible } from '@testing-library/user-event/dist/utils';
import './styles.css';
import { useState } from 'react';

export const VanishString = () => {
  const [isVisible, setIsVisible] = useState(false);

  // const defaultStyle = { opacity: 1, transition: '500ms' };
  // const alternativeStyle = { opacity: 0, transition: '500ms' };
  // const [textStyle, setTextStyle] = useState({ defaultStyle });
  //<p style={ textStyle}>{isVisible && 'Jakiś tekst'}</p>

  function handleShow() {
    setIsVisible(!isVisible); //skoro jest false a chcemy odwrotność to możemy użyć ! by zmienić wartość z false na true
  }

  return (
    <div>
      <h1>Tekst</h1>
      <button onClick={handleShow}>button</button>
      <p>{isVisible && 'Jakiś tekst'}</p>
    </div>
  );
};
