import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import './style_menu.css';
import getId from '../../helpers';
import { connect } from 'react-redux';


const Menu = ({style_menuItem, menuItems}) => {
    const keys = getId()
    return (
        <ul className={style_menuItem}>
        {menuItems.map((item) => (
            <MenuItem key={keys()} text={item.text} url={item.url}/>
        ))}
        </ul>
    );
}


const mapStateToProps = (state) => {
    return {
      menuItems: state.menu.menuItems,
    };
  };
export default connect(mapStateToProps)(Menu);

