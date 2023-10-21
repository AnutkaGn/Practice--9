import React from 'react';
import './content.css';

const Content = (props) => {
  return (
    <div className="content">
      <p className="name_content">{props.title}</p>
      <p>This is the main content</p>
    </div>
  );
};

export default Content;