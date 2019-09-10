import React from 'react';
import './Modal.css';
import Button from '../button/button.js';
import PropTypes from 'prop-types';

const Modal = (props) => {

  const redirectView = (view) => {
    if(view === 'home') {
      window.location ='/';
    }
    if(view === 'contact') {
      window.location ='/contact';
    }
  }; 

  const buttonToShow = () => {
    switch (props.button) {
      case "returnHome":
      return <Button
          text='Return Home'
          purpose= 'messageSentButton'
          clickEvent={(e) => redirectView('home')}
          testingID = 'returnHomeButton' />
      case 'tryAgain': 
      return <Button 
          text="Try Again"
          purpose = 'messageSentButton'
          clickEvent = {(e) => redirectView('contact')}
          testingID='tryAgainButton' />
        default: 
        return null;
    }
  }

  return (
    <div className='modalWrapper' data-cy='modalWrapper'>
      <div className='modalBody'>
        <div className='modalText'>
          <h3>{props.text}</h3>
        </div>
        <div className='modalButtonWrapper'>
          {buttonToShow()}
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  text: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
}

export default Modal;