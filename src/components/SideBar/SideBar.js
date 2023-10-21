import React from 'react';
import './sideBar.css';

const SideBar = (props) => {
  return (
    <aside className="sidebar">
      <p>{props.title}</p>
    </aside>
  );
};

export default SideBar;