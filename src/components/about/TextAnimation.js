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
      stiffness: 150,
      damping: 8
    }}
    interval= {1500} />
  )
}

export default TextAnimation;