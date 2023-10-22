import React from 'react';
import './sideBar.css';
import Menu from '../Menu/Menu';
import getId from '../../helpers';

const SideBar = (props) => {
  const menuItems = [
    {text: 'main', url: 'http://localhost:3000'},
    {text: 'moodle', url: 'http://78.137.2.119:2929/'},
    {text: 'chsbc', url: 'http://csbc.edu.ua/'},
  ]
  return (
    <div className="sidebar">
      <h2 className="title">{props.title}</h2>
      <Menu list={menuItems} handler={getId()}/>
    </div>
  );
};

export default SideBar;