import React from 'react';
import MenuItem from './MenuItem/MenuItem';


const Menu = ({list, handler}) => {
    return (
        <ul>
        {list.map((item) => (
            <MenuItem key={handler("menu-item")} text={item.text} url={item.url}/>
        ))}
        </ul>
    );
}
export default Menu;
