import React from 'react';
import './PictureFrame.css';
import headshot from '../assets/images/headshot.jpg';

function PictureFrame() {
  return (
    <div className='pictureFrame-container'>
      <div className='pictureFrame'>
        <img src={headshot} alt='headshot of developer' className='portfolio-picture' />
      </div>
    </div>
  )
}

export default PictureFrame;