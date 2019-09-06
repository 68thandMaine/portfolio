import React from 'react';
import './filler.css';
import PropTypes from 'prop-types';

const Filler = (props) => {
  return <div className='filler' style={{ width: `${props.percent}%` }} />
}

Filler.propTypes = {
  percent: PropTypes.number.isRequired,
}

export default Filler;