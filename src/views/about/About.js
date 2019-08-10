import React from 'react';
import './About.css';

function About() {
  return (
    <div className='about-container' data-cy='about-view'>
      <h1>Bio</h1>
      <div className='about-header'>
        <div className='about-picture'>
          <p>Put a picture in here brutha!</p>
        </div>
      </div>
      <h3>what do I say about myself?</h3>
      <h5>Welcome to my little corner of the internet</h5>
      <p>I'm glad you've found yourself to my page. My name is Chris! I'm primarily a frontend developer living in Portland, Oregon,</p>
      <p>but I often dabble in full stack projects.</p>
    </div>
  )
}
export default About;