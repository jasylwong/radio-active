import React from 'react';

function RadioStation({ station }) {
  return (
    <div>
      <img src={station.stationLockScreenImage} alt={station.Name} height="250vh" />
      <audio id="audio" src={station.stationAACStream} paused="true" autoPlay />
    </div>
  );
}

export default RadioStation;
