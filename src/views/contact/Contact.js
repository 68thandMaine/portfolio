import React, { useState, useEffect } from 'react';
import EmailService from '../../services/api/EmailService';
import './Contact.css';
import PageHeader from '../../components/page-header/PageHeader.js'
import FormGreeting from '../../components/contact-greeting/ContactGreeting.js';
import ContactForm from '../../components/contact-form/ContactForm.js';
import Arrows from '../../components/arrows/Arrows.js';

function Contact() {
  // Declare state values for displaying the form or not
  const [displayForm, set_displayForm] = useState(false); //useState() takes the intitial state of displayForm
  

 function handleToggleForm() {
   let toggleForm = !displayForm;
    set_displayForm(toggleForm);
    document.querySelector('.contact-wrapper').scrollIntoView(false);
  }

  function handleSendMessage(message){
    (EmailService.filterSpam(message)) ? console.log('spam caught') :  EmailService.sendEmail(message);
    handleToggleForm();
  }
  return (
    <div className='contact-wrapper'>
      <PageHeader 
        title="LETS TALK"
        className='contact-title' />
      <FormGreeting />

      {(displayForm === false) ? 
      <div className='arrowButton'> 
        <Arrows
          showForm = {handleToggleForm}/>
      </div> 
      :
      <ContactForm 
        sendMessage = {handleSendMessage}/> 
      }

    </div>
  );
}

export default Contact;
