import React, { useState, useEffect } from 'react';
import EmailService from '../../services/api/EmailService';
import './Contact.css';
import FormGreeting from '../../components/contact-greeting/ContactGreeting.js';
import ContactForm from '../../components/contact-form/ContactForm.js';
import Arrows from '../../components/arrows/Arrows.js';

function Contact() {
  // Declare state values for displaying the form or not
  const [displayForm, set_displayForm] = useState(false); //useState() takes the intitial state of displayForm
  

 function handleToggleForm() {
   let toggleForm = !displayForm;
    set_displayForm(toggleForm);
    if(document.querySelector('.contactForm-body')) {
      return null;
    } else
    setTimeout(() => {
      document.querySelector('.contactForm-body').scrollIntoView();
    }, 300);
  }

  function handleSendMessage(message){
    (EmailService.filterSpam(message)) ? console.log('spam caught') :  EmailService.sendEmail(message);
    // handleToggleForm();
  }
  return (
    <div className='contact-wrapper'>
      <h1 className='contact-title'>LETS TALK</h1>
      <FormGreeting />
      <ContactForm 
        sendMessage = {handleSendMessage}/> 

      {/* {(displayForm === false) ? 
      <div className='arrowButton'> 
        <Arrows
          showForm = {handleToggleForm}/>
      </div> 
      :
      } */}

    </div>
  );
}

export default Contact;
