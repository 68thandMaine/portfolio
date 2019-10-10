import React from 'react';

import './AboutBody.css';


function AboutBody() {
  return (
        <div className='aboutBody-text'>
          <h5>It's nice to meet you!</h5>
          <p>I've never been good at introductions, so let's just jump straight into it...</p>
          <p>Throughout my life I've found myself drawn to activites that require <span className='bolder'>logical creativity.</span> In essence - I like to apply my own ingenuity to established processes and discover what outcomes I can produce. Following this fascination has given the opportunity to try my hands at many cool things, but most recently - web development!</p>
          <p>I take pride in the content I produce, and I tend to work most with <span className='technologyBolder'>React, Vue, Node, and C#</span>. I enjoy using my critical thinking and keen attention to detail that I honed working in scientific fields and form a well documented, and strategic approach for creating new tools and bringing ideas to life.
          </p>  
          <p>
          I drink coffee, I read, I bike, I notice the small details in life, I write code and grow a little each day.
          </p>
       </div>
  )
}

export default AboutBody;