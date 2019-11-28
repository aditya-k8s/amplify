import React from 'react';
import './App.css';
import logo from './logo.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Everyone. <span aria-label="wave" role="img">👋</span>
        </p>
        <a
          className="App-link"
          href="https://www.meetup.com/DevTalks-India/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's talk!
        </a>
      </header>
    </div>
  );
}

export default App;
