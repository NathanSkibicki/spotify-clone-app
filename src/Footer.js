import React from 'react'
import "./Footer.css"
import {useState} from 'react'


function Footer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const progressBarWidth = isPlaying ? '30%' : '0%';

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="footer">
      <div className="song-info">
        <div className="song-thumbnail"></div>
        <div className="song-details">
          <h4>Song Title</h4>
          <p>Artist Name</p>
        </div>
      </div>
      <div className="controls">
        {isPlaying ? (
          <button className="pause-button" onClick={handlePlayPause}>
            &#10074;&#10074;
          </button>
        ) : (
          <button className="play-button" onClick={handlePlayPause}>
            &#9658;
          </button>
        )}
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: progressBarWidth }}></div>
      </div>
    </div>
  );
}

export default Footer 