import React from 'react';
import { templates } from 'core/js/reactHelpers';

export default function VideoLoop(props) {
  return (
    <div className='component__inner videoloop__inner'>
      <templates.header {...props} />

      <video className='videoloop__video' autoPlay loop muted playsInline>
        <source src={props._src} type='video/mp4' />
      </video>
    </div>
  );
}
