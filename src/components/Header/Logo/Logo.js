import React from 'react';
import './logo.css';


const Logo = (props) => {

    return (
        <div>
            <a href="http://localhost:3000"><img src={props.src} alt='logo'/></a>
        </div>
    );
}

export default Logo;
