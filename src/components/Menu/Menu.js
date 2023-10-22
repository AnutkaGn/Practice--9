import React from 'react';
import MenuItem from '../MenuItem/MenuItem';


const Menu = ({list, handlelr}) => {
    return (
        <ul>
        {list.map((item) => (
            <MenuItem key={handlelr("menu-item")} text={item.text} url={item.url}/>
        ))}
        </ul>
        
    );
}
export default Menu;
