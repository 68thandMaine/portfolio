import React from 'react';
import PropTypes from 'prop-types';
import './button.css';


const Button = (props) => {
  return (
    <button className={`button + ${props.purpose}`}
      onClick={props.clickEvent}>{props.text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  purpose: PropTypes.string,
  clickEvent: PropTypes.func,
}

export default Button;