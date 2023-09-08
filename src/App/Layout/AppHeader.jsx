import React from 'react';
import './styles/header.css';
import '../Components/HeaderMenu/styles.css';
import pomeranianLogo from '../Images/start-it-logo.svg';
import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';
import user from '../Images/user.svg';
import menu from '../Images/menu.svg';

const Logo = () => (
  <a href="/">
    <img
      style={{ width: 150 }}
      src={pomeranianLogo}
      className="pomeranian-logo"
      alt="pomeranian-logo"
    />
  </a>
);

export function AppHeader({ handleVisible }) {
  return (
    <header>
      <button className="header-btn">
        <img src={menu} alt="menu icon" onClick={handleVisible} />
      </button>
      <Logo />
      <div className="images-container">
        <HeaderMenu />
      </div>
      <button className="header-btn">
        <img src={user} alt="user icon" />
      </button>
    </header>
  );
}
