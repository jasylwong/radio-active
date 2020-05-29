import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';

function App() {
  // console.log(document.getElementById('audio').paused)
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    const audio = document.getElementById('audio');
    setIsPlaying(!isPlaying);
    return isPlaying ? audio.pause() : audio.play();
  };

  return (
    <div className="App">
      <Title content="Radio-Active" />
      <audio id="audio" src="https://ais.absoluteradio.co.uk/absoluteclassicrock.mp3?direct=true" paused="true" />
      <button id="player" onClick={() => handleClick()} type="button">{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
}

export default App;
