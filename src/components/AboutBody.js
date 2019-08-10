import React from 'react';
import './AboutBody.css';

function AboutBody() {
  return (
    <div className='aboutBody-container' data-cy='aboutBody-container'>
       <p>I am passionate about</p>
          <ul>
            <li>The environment</li>
            <li>Photography</li>
            <li>Bringing design to life with code</li>
            <li>Meanginful interactions</li>
            <li>Minimalism</li>
          </ul>

        <p>My current foucs is on application development with ASP.NET and JavaScript SPA's.</p>

    </div>
  )
}

export default AboutBody;