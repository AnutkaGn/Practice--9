import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import './style_menu.css';


const Menu = ({list, style, handler}) => {
    return (
        <ul className={style}>
        {list.map((item) => (
            <MenuItem key={handler("menu-item")} text={item.text} url={item.url}/>
        ))}
        </ul>
    );
}
export default Menu;
