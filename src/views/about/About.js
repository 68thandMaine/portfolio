import React from 'react';
import './About.css';
import PictureFrame from '../../components/PictureFrame.js';
import AboutBody from '../../components/AboutBody.js';
function About() {
  return (
    <div className='about-container' data-cy='about-view'>
      <div className='about-header'>
        <h1>Nice to meet you</h1>
      </div>
      <h5>Welcome to my little corner of the internet</h5>
      <div className='about-body'>
        <PictureFrame />
        <AboutBody />
      </div>
    </div>
  )
}
export default About;