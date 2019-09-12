import React from 'react';
import PropTypes from 'prop-types';
import './button.css';


const Button = (props) => {
  return (
    <button data-cy={props.testingID} className={`button + ${props.purpose}`}
      onClick={props.clickEvent}
      type='button'>
        {props.text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  purpose: PropTypes.string, 
  clickEvent: PropTypes.func,
  testingId: PropTypes.string
}

export default Button;