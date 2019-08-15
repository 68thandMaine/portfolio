import React from 'react';
import './About.css';
import PictureFrame from '../../components/PictureFrame.js';
import AboutBody from '../../components/AboutBody.js';
import LinkBar from '../../components/LinkBar.js';

function About() {
  return (
    <div className='about-container' data-cy='about-view'>
      <div className='about-header'>
        <h1>Nice to meet you</h1>
        <h3>Welcome to my little corner of the internet</h3>
      </div>
      <div className='about-body'>
        <div className='about-body-content'>
          <div>
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