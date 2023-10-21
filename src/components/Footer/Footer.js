import React from 'react';
import './footer.css';

const Footer = (props) => {
  return (
    <footer className="footer">
      <p>{props.title}</p>
    </footer>
  );
};

export default Footer;