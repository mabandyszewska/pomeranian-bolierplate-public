import React from 'react';
import '../Components/HeaderMenu/styles.css';
import pomeranianLogo from '../Images/start-it-logo.svg';
import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';

const Logo = () => (
  <a href="/">
    <img
      style={{ width: 150 }}
      src={pomeranianLogo}
      className="logo"
      alt="pomeranian-logo"
    />
  </a>
);

export function AppHeader() {
  return (
    <header>
      <Logo />
      <HeaderMenu />
    </header>
  );
}
