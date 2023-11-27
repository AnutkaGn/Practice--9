import React from 'react';
import './logo.css';
import { useSelector } from 'react-redux';


const Logo = () => {
    const srcLogo = useSelector((state) => state.logo.src)
    return (
        <div>
            <a href="http://localhost:3000"><img src={srcLogo} alt='logo'/></a>
        </div>
    );
}

export default Logo;
