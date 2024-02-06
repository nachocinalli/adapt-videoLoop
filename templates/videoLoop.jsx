import React, { useState, useEffect } from 'react';
import { templates } from 'core/js/reactHelpers';

export default function VideoLoop(props) {
  const { _src, _poster, _showPauseControl, playLabel, pauseLabel } = props;
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const video = document.querySelector('.videoloop__video');
    if (video) {
      if (playing) {
        video.play();
      } else {
        video.pause();
      }
    }
  }, [playing]);

  return (
    <div className='component__inner videoloop__inner'>
      <templates.header {...props} />
      <div className='component__widget videoloop__widget'>
        <video className='videoloop__video' autoPlay loop muted playsInline poster={_poster}>
          <source src={_src} type='video/mp4' />
        </video>
        {_showPauseControl && (
          <div className='videoloop__controls'>
            <button className='videoloop__playpause' type='button' aria-label={playing ? pauseLabel : playLabel} onClick={() => setPlaying(!playing)}>
              <span aria-hidden='true' className={playing ? 'icon icon-video-pause-circle' : 'icon icon-video-play-circle'}></span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
