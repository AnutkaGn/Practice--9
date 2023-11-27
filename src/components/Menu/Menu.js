import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import './style_menu.css';
import getId from '../../helpers';
import { useSelector } from 'react-redux';


const Menu = ({style_menuItem}) => {
    const keys = getId()
    const list = useSelector((state) => state.menu.menuItems);
    return (
        <ul className={style_menuItem}>
        {list.map((item) => (
            <MenuItem key={keys()} text={item.text} url={item.url}/>
        ))}
        </ul>
    );
}
export default Menu;
