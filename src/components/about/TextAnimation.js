import React from 'react';
import './TextAnimation.css';
import TextLoop from 'react-text-loop';

function TextAnimation() {
  return (
    <div className='textLoopStyles'>
    <TextLoop children={[
      " musician ",
      " scientist ",
      " photographer ",
      " builder ",
      " explorer ",
      " developer ",
      " human"
    ]}
    springConfig={{
      stiffness: 150,
      damping: 8
    }}
    interval= {1500} 
    />
    </div>
  )
}

export default TextAnimation;