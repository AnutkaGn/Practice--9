import React from 'react';
import './sideBar.css';
import Menu from '../Menu/Menu';
import getId from '../../helpers';

const SideBar = (props) => {
  const menuItems = [
    {text: 'Головна', url: 'http://localhost:3000'},
    {text: 'Про нас', url: 'http://78.137.2.119:2929/'},
    {text: 'Контакти', url: 'http://csbc.edu.ua/'},
  ];
  return (
    <div className="sidebar">
      <h2 className="title">{props.title}</h2>
      <Menu list={menuItems} handlelr={getId()}/>
    </div>
  );
};

export default SideBar;