import React from 'react';

import './AboutBody.css';

import TextAnimation from '../../components/about/TextAnimation';

function AboutBody() {
  return (
    <div className='aboutBody-container' data-cy='aboutBody-container'>
        <div className='aboutBody-title'>
          <p>I'm a : <span className='textAnimation'> <TextAnimation /> </span> </p>
          <p>living in</p>
          <h1 className='portlandText'>portland <span>oregon</span></h1>
        </div>
        <div className='aboutBody-mainText'>
          <p>I am passionate about creating meangingful experiences for others. I've worn a lot of shoes in my life and incorporate these experiences into development to form a multi-disciplinary approach to my work.</p>
          <br />
          <p></p>
          <br />
          <p>I have a passion for continued education and am currently focusing on an ASP.NET + JavaScript stack.</p>
       </div>
    </div>
  )
}

export default AboutBody;