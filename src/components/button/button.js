import React from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import './button.css';


const Button = (props) => {
  return (
    <button className={`button + ${props.purpose}`}>{props.text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  purpose: PropTypes.string
}

export default Button;