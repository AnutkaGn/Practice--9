import React from 'react';
import './logo.css';
import { connect } from 'react-redux';


const Logo = ({srcLogo}) => {
    return (
        <div>
            <a href="http://localhost:3000"><img src={srcLogo} alt='logo'/></a>
        </div>
    );
}

const mapStateToProps = (state) => ({
    srcLogo: state.logo.src,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
