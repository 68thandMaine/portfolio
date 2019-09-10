import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button.js';
import './ContactForm.css';

function ContactForm(props) {
  const [formInputs, setInputs] = useState({});
  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.sendMessage(formInputs);
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs(formInputs => ({...formInputs, [event.target.name]: event.target.value}));
  };
  const handleKeyPress = (event, view) => {
    if(event.key==='Enter') {
      advance(view);
    }
  };
  const goBack = (view) => {
    switch (view) {
      case 'name':
        props.setPageHeader("what should I call you?");
        document.getElementById('subjectWrapper').classList.add('hide');
        document.getElementById('nameWrapper').classList.remove('hide');
        break;
      case 'subject' : 
        props.setPageHeader("what's this all about?");
        document.getElementById('messageWrapper').classList.add('hide');
        document.getElementById('subjectWrapper').classList.remove('hide');
      break;
      case 'message' :
        props.setPageHeader("what can I do for you?"); 
        document.getElementById('emailWrapper').classList.add('hide');
        document.getElementById('messageWrapper').classList.remove('hide');
      break;
        default:
        return null;
    }
  };
  const advance = (view) => {
    switch (view) {
      case "subject": 
        props.setPageHeader("what's this all about?");
        document.getElementById('nameWrapper').classList.add('hide');
        document.getElementById('subjectWrapper').classList.remove('hide');
        document.getElementById('sbjct').focus();
        break;
      case "message":
        props.setPageHeader("what can I do for you?");
        document.getElementById('subjectWrapper').classList.add('hide');
        document.getElementById('messageWrapper').classList.remove('hide');
        document.getElementById('msg').focus();
        break;
      case "email":
        props.setPageHeader("What's a good email I can reach you at?");
        document.getElementById('messageWrapper').classList.add('hide');
        document.getElementById('emailWrapper').classList.remove('hide');
        document.getElementById('eml').focus();
        break;
      default:
        return null;
    }
  };

  return (
    <div className='contactForm-body' data-cy='contactForm'>
      <form className='contactForm' >
       
        <div id='nameWrapper' data-cy="nameWrapper">
          <div className='formInput'>
           <label className='contactFormLabel' htmlFor='nme'>Full name / Company Name</label>
            <input  id='nme' name='nme' onChange={handleInputChange} value={formInputs.name} data-cy='name' type='text' onKeyPress={(e)=>handleKeyPress(e, 'subject')} />
          </div>
          <Button
            text="to subject"
            purpose='advance'
            clickEvent={(e) => {advance('subject')}}
            testingID='showSubjectButton' />
        </div>

        <div id='subjectWrapper' className='hide' data-cy='subjectWrapper'>
          <div className='formInput'>
            <label className='contactFormLabel' htmlFor='sbjct'>Subject</label>
            <input id='sbjct' name='sbjct' onChange={handleInputChange} value={formInputs.subject} data-cy='subject' type='text' 
            onKeyPress={(e) => handleKeyPress(e, 'message')}/>
          </div>
          <div className='formNavigationButtons'>
            <Button
              text='Go Back'
              purpose='goBack'
              clickEvent={(e)=>goBack('name')} 
              testingID='goBackToNameButton'/>
            <Button
              text=" to message"
              purpose='advance'
              clickEvent={(e) => {advance('message')}}
              testingID='showMessageButton' />
            </div>
        </div>

        <div id='messageWrapper' className='hide' data-cy='messageWrapper'>
          <div className='formInput'>
            <label className='contactFormLabel' htmlFor='msg'>Message</label> 
            <textarea id='msg' name='msg' onChange={handleInputChange} value={formInputs.message} data-cy='message' type='text' onKeyPress={(e) => handleKeyPress(e, 'email')} ></textarea>
          </div>
          <div className='formNavigationButtons'>
            <Button
              text='Go Back'
              purpose='goBack'
              clickEvent={(e)=>goBack('subject')} 
              testingID="goBackToSubjectButton"/>
            <Button
              text="to email"
              purpose='advance'
              clickEvent={(e) => {advance('email')}}
              testingID='showEmailButton' />
            </div>
        </div>

        <div id='emailWrapper' className='hide' data-cy='emailWrapper'>
          <div className='formInput'>
            <label className='contactFormLabel' htmlFor='eml'>Email</label>
            <input id='eml' name='eml' onChange={handleInputChange} value={formInputs.email} data-cy='email' type='email'/>
          </div>
          <div className='formNavigationButtons'>
            <Button
              text='Go Back'
              purpose='goBack'
              clickEvent={(e)=>goBack('message')}
              testingID='goBackToMessageButton' />
            <Button
              text='Send'
              purpose='send'
              clickEvent={handleSubmit}
              testingID='sendMessageButton'
              />
            </div>
        </div>

      </form>
      {/* FOR SPAM PROTECTION */}
    <label className='shieldsup' htmlFor='firstName'></label>
    <input className='shieldsup' autoComplete='off' id='firstName' name='firstName' type='text' onChange={handleInputChange} value={formInputs.hpFirstName}/>
    <label className='shieldsup' htmlFor='lastName'></label>
    <input className='shieldsup' autoComplete='off' id='lastName' name='lastName' type='text' onChange={handleInputChange} value={formInputs.hpLastName} />
    <label className='shieldsup' htmlFor='lastName'></label>
    <input className='shieldsup' autoComplete='off' id='lastName' name='lastName' type='text' onChange={handleInputChange} value={formInputs.hpEmail} />
    <label className='shieldsup' htmlFor='message'></label>
    <textarea className='shieldsup' autoComplete='off' id='message' name='message' type='text' onChange={handleInputChange} value={formInputs.hpMessage} />
    </div>
  );
}

ContactForm.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  setPageHeader: PropTypes.func.isRequired
}

export default ContactForm;