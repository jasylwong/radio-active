import React from 'react';
import './App.css';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Title content="Radio-Active" />
      <audio controls id="audio" src="https://ais.absoluteradio.co.uk/absoluteclassicrock.mp3?direct=true" />
    </div>
  );
}

export default App;
