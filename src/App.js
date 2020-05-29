import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from './components/Title';
import './App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [stations, setStations] = useState(null);
  const [station, setStation] = useState('');
  const [stationNP, setStationNP] = useState('');
  const [stationCounter, setStationCounter] = useState(0);

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://listenapi.planetradio.co.uk/api9/initdadi/absolute-radio-10s')
      .then((res) => {
        setStations(res.data.stationBrandRelated);
        setStation(res.data.stationBrandRelated[0]);
        setStationNP(res.data.stationBrandRelated[0].stationNowPlaying);
      });
  }, []);

  const handleClick = () => {
    const audio = document.getElementById('audio');
    setIsPlaying(!isPlaying);
    return isPlaying ? audio.pause() : audio.play();
  };

  const handleForward = () => {
    if (stationCounter === stations.length - 1) {
      setStationCounter(0);
      setStation(stations[0]);
    } else {
      setStationCounter(stationCounter + 1);
      setStation(stations[stationCounter + 1]);
    }
    setStationNP(stations[0].stationNowPlaying);
  };

  return (
    <div className="App">
      <Title content="Radio-Active" />
      <br />
      <div>{`Station: ${station.stationName}`}</div>
      <br />
      <img src={stationNP.nowPlayingImage} alt={station.Name} />
      <audio id="audio" src={station.stationMP3Stream} paused="true" />
      <br />
      <br />
      <p>{`Current track: ${stationNP.nowPlayingTrack} by ${stationNP.nowPlayingArtist}`}</p>
      <br />
      <button id="player" onClick={() => handleClick()} type="button">{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={() => handleForward()} type="button">Forward</button>
    </div>
  );
}

export default App;
