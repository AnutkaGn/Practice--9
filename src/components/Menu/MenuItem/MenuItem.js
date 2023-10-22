import React from 'react';


const MenuItem = ({text, url}) => {
  const isOpenInNewTab = (url) => url !== window.location.hostname
  if (url) {
    return isOpenInNewTab(url) ? (<li><a href={url} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: 'rgb(243,243,243)', fontSize: "17px"}}>{text}</a></li>) 
    : (<li><a href={url}>{text}</a></li>);
  } 
  else {
    return (
      <li><span>{text}</span></li>
    );
  }
}

export default MenuItem;
