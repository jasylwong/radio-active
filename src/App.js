import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from './components/Title';
import RadioStation from './components/RadioStation';
import Control from './components/Control';
import './App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
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
  };

  const handleForward = () => {
    if (stationCounter === stations.length - 1) {
      setStationCounter(0);
      setStation(stations[0]);
    } else {
      setStationCounter(stationCounter + 1);
      setStation(stations[stationCounter + 1]);
    }
  };

  return (
    <div className="App">
      <br />
      <br />
      <Title content="Radio-Active" />
      <br />
      <RadioStation station={station} />
      <br />
      <br />
      <br />
      <Control
        handleBackward={handleBackward}
        handleClick={handleClick}
        handleForward={handleForward}
        isPlaying={isPlaying}
      />
    </div>
  );
}

export default App;
