import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import './style_menu.css';
import getId from '../../helpers';


const Menu = ({list, style_menuItem}) => {
    const keys = getId()
    return (
        <ul className={style_menuItem}>
        {list.map((item) => (
            <MenuItem key={keys()} text={item.text} url={item.url}/>
        ))}
        </ul>
    );
}
export default Menu;
