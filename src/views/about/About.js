import React from 'react';
import './About.css';

import AboutBody from '../../components/about/AboutBody.js';
import LinkBar from '../../components/about/LinkBar.js';
import PictureFrame from '../../components/about/PictureFrame.js';

function About() {
  return (
    <div className='about-container' data-cy='about-view'>
      <div className='about-header'>
        <h2>Welcome to my little corner of the internet</h2>
      </div>
      <div className='about-body'>
        <div className='about-body-content'>
          <div className='about-body-pictureFrame'>
            <PictureFrame />
            <button>Download Resume</button>
          </div>
          <AboutBody />    
        </div>
        <LinkBar />
      </div>
    </div>
  )
}
export default About;