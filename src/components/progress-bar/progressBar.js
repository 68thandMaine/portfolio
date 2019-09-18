import React from 'react';
import './progressBar.css';
import Filler from './filler.js';  
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  return (
    <div className='progressBarWrapper'>
      <h6>PERCENT COMPLETE: {props.percentage}%</h6>
      <div className='progressBar'>
        <Filler percent={props.percentage}/>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
}

export default ProgressBar;