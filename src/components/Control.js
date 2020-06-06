
import React from 'react';

function Control({
  handleBackward, handleClick, handleForward, isPlaying,
}) {
  return (
    <>
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
    </>
  );
}

export default Control;
