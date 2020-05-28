import React from 'react';
import './App.css';
import Title from './components/Title.js';

function App() {
  return (
    <div className="App">
      <Title />
      Added types for PR, and only on merges
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
