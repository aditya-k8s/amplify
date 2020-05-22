import React from 'react';
import './gridItem.css';

const GridItem = ({ icon, link, className }) => {
  return (
      <div className="gridItem">
        <a className={className} href={link} target="_blank"><i className={`${icon} fab`} /></a>
      </div>
    );
};

export default GridItem;
