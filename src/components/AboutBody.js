import React from 'react';
import './AboutBody.css';

function AboutBody() {
  return (
    <div className='aboutBody-container' data-cy='aboutBody-container'>
       <div className='aboutBody-mainText'>
        <p>I'm a (musician, scientist, photographer, barista, explorer, developer)living in</p>
        <h2 className='portlandText'>portland <span>oregon</span></h2>
        <p>I am passionate about creating meangingful experiences for others. I've worn a lot of shoes in my life and incorporate them all into my current experience.</p>
        <br />
        <p>I use my previous experiences to form a multi-disciplinary approach to the work that I do.</p>
        <br />
        <p>I have a passion for continued education and am currently focusing on an ASP.NET + JavaScript stack.</p>
       </div>
    </div>
  )
}

export default AboutBody;