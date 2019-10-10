import React, {useState, useEffect} from 'react';
import EmailService from '../../services/api/EmailService';
import './Contact.css';
import Button from '../../components/button/button.js';
import ContactForm from '../../components/contact-form/ContactForm.js';
import FormGreeting from '../../components/contact-greeting/ContactGreeting.js';
import LoadingBars from '../../components/loading-bar/LoadingBar.js';
import Modal from '../../components/modal/Modal.js';

function Contact(props) {
    
    const [successMessage,
        set_successMessage] = useState(null);
    useEffect(() => {
        showSuccessMessage();
    });

    async function handleSendMessage(message) {
       
        if (EmailService.filterSpam(message)) {
          console.log('spam caught');
        } else {
            document
                .querySelector('.formWrapper')
                .classList
                .add('hide');
           set_successMessage(0);
           let answer = await EmailService.sendEmail(message);
            switch (answer) {
                case 200:
                    return set_successMessage(200);
                case 400: 
                    return set_successMessage(400);
                default:
                    return set_successMessage(null);
            }
        }
    }

    function showSuccessMessage() {
        switch(successMessage) {
            case 200: 
            return(
                <Modal 
                    text="Thank you, I'll be in touch."
                    button="returnHome" /> 
            );
            case 400: 
            return (
                <Modal 
                    text="Sorry, there was an error with the form submission."
                    button="tryAgain" />
            );
            case 0:
                return (
                <div className='sendingWrapper' data-cy='sendingWrapper'>
                    <LoadingBars />
                </div>);
            default: 
             return null;
        }
    }

    function showForm() {
        document
            .querySelector('.formGreetingWrapper')
            .classList
            .add('hide');
        document
            .querySelector('.formWrapper')
            .classList
            .add('show');
        document
            .getElementById('nme')
            .focus();
    }

    return (
        <div className='contact-wrapper'>
            <div> 
                <div className='formGreetingWrapper' data-cy='formGreetingWrapper'>
                    <FormGreeting/>
                    <Button
                        text='Begin'
                        purpose='formAdvance'
                        clickEvent={showForm}
                        testingID='showFormButton'/>
                </div>
            </div>


            <div className='formWrapper' data-cy='formWrapper'>
            
            
                <ContactForm sendMessage={handleSendMessage} />
           
           
           
            </div>
            {showSuccessMessage()}
        </div>
    );
}

export default Contact;



