import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
      <div className="navigation">
        <div className="navigation-small">
          <Link className="link" to="/home">Home</Link>
          <Link className="link" to="/events">Events</Link>
        </div>
        <div className="navigation-small">
          <Link className="link" to="/speaker">Speakers</Link>
          <Link className="link" to="/contact">Contact</Link>
        </div>

      </div>
  );
};

export default Navigation;
