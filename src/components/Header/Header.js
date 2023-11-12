import React from 'react';
import './header.css';
import Logo from './Logo/Logo';



const Header = (props) => {
  return (
    <header className="header">
      <Logo pathToImage = "./image.png"/>
      <p>{props.title}</p>
    </header>
  );
};

export default Header;