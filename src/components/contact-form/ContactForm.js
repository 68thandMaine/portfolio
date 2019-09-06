import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button.js';
import './ContactForm.css';

const ContactForm = (props) => {
  const [formInputs, setInputs] = useState({
    
  });

  const handleSubmit = (event) => {
    event.preventDefault() 
    props.sendMessage(formInputs);
  }

  const handleInputChange = (event) => {
    event.persist();
    setInputs(formInputs => ({...formInputs, [event.target.name]: event.target.value}));
  }

  return (
    <div className='contactForm-body'>
      <form className='contactForm' onSubmit={handleSubmit}>
        <div className='form-row'>
          <div className='form-col'>
            <label htmlFor='fnme'>First Name</label>
            <input id='fnme' name='fnme' onChange={handleInputChange} value={formInputs.firstName} data-cy='firstname' type='text' />
          </div>
          <div className='form-col'>
            <label htmlFor='lnme'>Last Name</label>
            <input id='lnme' name='lnme' onChange={handleInputChange} value={formInputs.lastName} data-cy='lastname' type='text' />
          </div>
        </div>
        <div className='form-row'>
          <label htmlFor='eml'>Email</label>
          <input id='eml' name='eml' onChange={handleInputChange} value={formInputs.email} data-cy='email' type='email' required/>
        </div>
        <div className='form-row'>
          <label htmlFor='msg'>Message</label>
          <textarea id='msg' name='msg' onChange={handleInputChange} value={formInputs.message} data-cy='message' type='text' required></textarea>
        </div>
        <Button
          text='Send'
          purpose='send'
          />
      </form>
      {/* FOR SPAM PROTECTION */}
    {/* <label className='shieldsup' htmlFor='firstName'></label>
    <input className='shieldsup' autoComplete='off' id='firstName' name='firstName' type='text' onChange={handleInputChange} value={formInputs.hpFirstName}/>
    <label className='shieldsup' htmlFor='lastName'></label>
    <input className='shieldsup' autoComplete='off' id='lastName' name='lastName' type='text' onChange={handleInputChange} value={formInputs.hpLastName} />
    <label className='shieldsup' htmlFor='lastName'></label>
    <input className='shieldsup' autoComplete='off' id='lastName' name='lastName' type='text' onChange={handleInputChange} value={formInputs.hpEmail} />
    <label className='shieldsup' htmlFor='message'></label>
    <textarea className='shieldsup' autoComplete='off' id='message' name='message' type='text' onChange={handleInputChange} value={formInputs.hpMessage} /> */}
    </div>
  );
}

ContactForm.propTypes = {
  sendMessage: PropTypes.func.isRequired
}

export default ContactForm;