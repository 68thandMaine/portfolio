import React from 'react';
import './LoadingBar.css';

const LoadingBar = () => {
  return (
    <div className='loadingBars' data-cy='loadingBars'>
      <span></span>
      <span></span> 
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span> 
    </div>
  );
}

export default LoadingBar;