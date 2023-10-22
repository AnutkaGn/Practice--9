import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import './style_menu.css';


const Menu = ({list, style_menuItem, handler}) => {
    return (
        <ul className={style_menuItem}>
        {list.map((item) => (
            <MenuItem key={handler("menu-item")} text={item.text} url={item.url}/>
        ))}
        </ul>
    );
}
export default Menu;
