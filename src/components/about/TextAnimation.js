import React from 'react';
import TextLoop from 'react-text-loop';

function TextAnimation() {
  return (
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
      stiffness: 180,
      damping: 8
    }} />
  )
}

export default TextAnimation;