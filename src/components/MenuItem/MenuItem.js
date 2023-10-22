import React from 'react';

const MenuItem = ({text, url}) => {
    const OpenInNewTab = (url) => url !== window.location.hostname
      if (url) {
        return OpenInNewTab(url) ? (
          <li><a href={url} target="_blank" rel="noopener noreferrer">{text}</a></li>
        ) : (
          <li><a href={url}>{text}</a></li>
        );
      } 
      else {
        return (
          <li>
            <span>{text}</span>
          </li>
        );
      }
    }

export default MenuItem;
