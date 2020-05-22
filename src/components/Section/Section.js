import React from 'react';
import './section.css';

const Section = ({ children }) => {
  return (
      <div className="section">
        {children}
      </div>
  );
};

export default Section;
