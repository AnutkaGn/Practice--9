import React from 'react';

const MenuItem = ({text, url}) => {
    const OpenInNewTab = (url) => {
        const currentHost = window.location.hostname
        const link = document.createElement('a')
        link.href = url
        return link.hostname !== currentHost
      };
    
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
