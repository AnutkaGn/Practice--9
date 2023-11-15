import React from 'react';
import './content.css';
import CatFacts from './CatFacts/CatFacts';

const Content = (props) => {
  return (
    <div className="content">
      <p className="name_content">{props.title}</p>
      <p>This is the main content</p>
      <CatFacts/>
    </div>
  );
};

export default Content;