import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button.js';
import './ContactForm.css';

const ContactForm = (props) => {
  const [formInputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault() 
    props.sendMessage(formInputs);
  }

  const handleInputChange = (e) => {
    e.persist();
    setInputs(formInputs => ({...formInputs, [e.target.name]: e.target.value}));
  }

  return (
    <div className='contactForm-body'>
      <form className='contactForm' onSubmit={handleSubmit}>
        <div className='form-row'>
          <div className='form-col'>
            <label htmlFor='firstName'>First Name</label>
            <input id='firstName' name='firstName' onChange={handleInputChange} value={formInputs.firstName} data-cy='firstName' type='text' />
          </div>
          <div className='form-col'>
            <label htmlFor='lastName'>Last Name</label>
            <input id='lastName' name='lastName' onChange={handleInputChange} value={formInputs.lastName} data-cy='lastName' type='text' />
          </div>
        </div>
        <div className='form-row'>
          <label htmlFor='email'>Email</label>
          <input id='email' name='email' onChange={handleInputChange} value={formInputs.email} data-cy='email' type='email' required/>
        </div>
        <div className='form-row'>
          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message' onChange={handleInputChange} value={formInputs.message} data-cy='message' type='text' required></textarea>
        </div>
        <Button
          text='Send'
          purpose='send'
          />
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  sendMessage: PropTypes.func.isRequired
}

export default ContactForm;