import React from 'react';
import './PictureFrame.css';
import headshot from '../../assets/images/headshot.jpg';

function PictureFrame() {
  return (
      <div className='pictureFrame'>
        <img src={headshot} alt='headshot of developer' className='portfolio-picture' />
      </div>
  )
}

export default PictureFrame;