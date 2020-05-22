import React from 'react';
import './list.css';

const List = ({ title, description }) => {
  return (
      <div className="list">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
  );
};

export default List;
