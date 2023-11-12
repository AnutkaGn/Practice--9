import React from 'react';
import './logo.css';

const Logo = (props) => {

    return (
        <div>
            <img src={require(props.pathToImage)} alt='logo'/>
        </div>
    );
}

export default Logo;
