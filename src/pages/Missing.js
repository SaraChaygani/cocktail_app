import React from 'react';
import '../styling/missing-style.css';

const Missing = () => {
  return (
    <div className='video-container'>
      <video
        width="700"
        height="400"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="../img/404ErrorPage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

  )
}

export default Missing