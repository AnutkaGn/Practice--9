import React from 'react';
import './content.css';
import CatFacts from './CatFacts/CatFacts';

const Content = (props) => {
  return (
    <div className="content_wrapper">
      <p className="name_content">{props.title}</p>
      <CatFacts/>
    </div>
  );
};

export default Content;