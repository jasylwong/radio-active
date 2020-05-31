import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from './components/Title';
import './App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [stations, setStations] = useState(null);
  const [station, setStation] = useState('');
  const [stationCounter, setStationCounter] = useState(0);

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://listenapi.planetradio.co.uk/api9/initdadi/absolute-radio-10s')
      .then((res) => {
        setStations(res.data.stationBrandRelated);
        setStation(res.data.stationBrandRelated[0]);
      });
  }, []);

  const handleClick = () => {
    const audio = document.getElementById('audio');
    setIsPlaying(!isPlaying);
    return isPlaying ? audio.pause() : audio.play();
  };

  const handleBackward = () => {
    if (stationCounter === 0) {
      setStationCounter(stations.length - 1);
      setStation(stations[stations.length - 1]);
    } else {
      setStationCounter(stationCounter - 1);
      setStation(stations[stationCounter - 1]);
    }
    setIsPlaying(false);
    document.getElementById('audio').pause();
  };

  const handleForward = () => {
    if (stationCounter === stations.length - 1) {
      setStationCounter(0);
      setStation(stations[0]);
    } else {
      setStationCounter(stationCounter + 1);
      setStation(stations[stationCounter + 1]);
    }
    setIsPlaying(false);
    document.getElementById('audio').pause();
  };

  return (
    <div className="App">
      <br />
      <br />
      <Title content="Radio-Active" />
      <br />
      <img src={station.stationLockScreenImage} alt={station.Name} height="250vh" />
      <audio id="audio" src={station.stationAACStream} paused="true" />
      <br />
      <br />
      <br />
      <button onClick={() => handleBackward()} type="button" className="button small-button">
        <i className="fa fa-step-backward fa-2x" />
      </button>
      <button id="player" onClick={() => handleClick()} type="button" className="button">
        {
          isPlaying ? <i className="fa fa-pause-circle fa-4x" /> : <i className="fa fa-play-circle fa-4x" />
        }
      </button>
      <button onClick={() => handleForward()} type="button" className="button small-button">
        <i className="fa fa-step-forward fa-2x" />
      </button>
    </div>
  );
}

export default App;
