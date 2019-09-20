context('/contact view integration tests', () => {
  beforeEach(() => {
    cy.visit('./contact');
  })
  describe('Button behavior', () => {
    context('form advancing', () => {
      it('Begin advances from contact page to the name input', () => {
        cy.get('[data-cy="formGreetingWrapper"]')
        .should('exist')
        .and('be.visible');
      cy.get('[data-cy="name"]')
        .should('be.hidden');
      cy.get('[data-cy="showFormButton"]').click();
      cy.get('[data-cy="formGreetingWrapper"]')
        .should('exist')
        .and('be.hidden');
      cy.get('[data-cy="name"]')
        .should('be.visible');
      });
      it('"...what can I do for you" button advances from name input to the subject input', () => {
        cy.viewFormName();
        cy.get('[data-cy="name"]')
        .should('exist')
        .and('be.visible');
      cy.get('[data-cy="subject"]')
        .should('be.hidden');
      cy.get('[data-cy="showSubjectButton"]').click();
      cy.get('[data-cy="name"]')
        .should('exist')
        .and('be.hidden');
      cy.get('[data-cy="subject"]')
        .should('be.visible');
      });
      it('"Perfect Lets talk" button advances to the message form', () => {
        cy.viewFormSubject();
        cy.get('[data-cy="subject"]')
        .should('exist')
        .and('be.visible');
      cy.get('[data-cy="message"]')
        .should('be.hidden');
      cy.get('[data-cy="showMessageButton"]').click();
      cy.get('[data-cy="subject"]')
        .should('exist')
        .and('be.hidden');
      cy.get('[data-cy="message"]').should('be.visible');
      });
      it('"...a way to email with you" button advances to the email form', () => {
        cy.viewFormMessage();
        cy.get('[data-cy="message"]')
        .should('exist')
        .and('be.visible');
      cy.get('[data-cy="email"]')
        .should('be.hidden');
      cy.get('[data-cy="showEmailButton"]').click();
      cy.get('[data-cy="message"]')
        .should('exist')
        .and('be.hidden');
      cy.get('[data-cy="email"]').should('be.visible');
      });
    });
    context('form returning to previous view', () => {
      it('go back on the subject input returns to name input', () => {
        cy.viewFormSubject();
        cy.get("[data-cy='subjectWrapper']")
          .should('be.visible')
          .and('contain', 'Subject');
        cy.get('[data-cy="goBackToNameButton"]').click();
        cy.get('[data-cy="subjectWrapper"]')
          .should('be.hidden');
        cy.get('[data-cy="nameWrapper"]')
          .should('be.visible')  
          .and('contain', 'Full name / Company Name');
      });
      it('go back on the message input returns to subject input', () => {
        cy.viewFormMessage();
        cy.get('[data-cy="messageWrapper"]')
          .should('be.visible')
          .and('contain', 'Message');
        cy.get('[data-cy="goBackToSubjectButton"]').click();
        cy.get('[data-cy="messageWrapper"]')
          .should('be.hidden');
        cy.get('[data-cy="subjectWrapper"]')
          .should('be.visible')  
          .and('contain', 'Subject');
      });
      it('go back on the email input returns to message input', () => {
        cy.viewFormEmail();
        cy.get('[data-cy="emailWrapper"]')
          .should('be.visible')
          .and('contain', 'Email');
        cy.get('[data-cy="goBackToMessageButton"]').click();
        cy.get('[data-cy="emailWrapper"]')
          .should('be.hidden');
        cy.get('[data-cy="messageWrapper"]')
          .should('be.visible')  
          .and('contain', 'Message');
      });
    });
  });
  describe('Form behavior', () => {
    it.only('form fields are required and will not advance unless a valid input is received', () => {
      cy.get('[data-cy="showFormButton"]').click();
      cy.get('[data-cy="name"]').type(' ');
      cy.get('[data-cy="showSubjectButton"]').click();
      cy.get('[data-cy="label"]')
        .should(($lbl) => {
          expect($lbl).to.contain('Full Name / Company Name');
          expect($lbl).to.have.class('invalidEntry');
      });
      cy.get('[data-cy="validationMessage"]')
        .should(($msg) => {
          expect($msg).to.contain('The name field must filled in.');
        });
      cy.get('[data-cy="subjectWrapper"]')
        .should('be.hidden');
      cy.get('[data-cy="name"]').type('Horatio');
      cy.get('[data-cy="showSubjectButton"]').click();
      cy.get('[data-cy="subjectWrapper"]')
        .should('be.visible');
      cy.get('[data-cy="subject"]').type(' ');
      cy.get('[data-cy="showMessageButton"]').click();
      cy.get('[data-cy="label"]')
      .should(($lbl) => {
        expect($lbl).to.contain('Subject');
        expect($lbl).to.have.class('invalidEntry');
      });
        cy.get('[data-cy="validationMessage"]')
        .should(($msg) => {
          expect($msg).to.contain('The subject field must filled in.');
        });
      cy.get('[data-cy="messageWrapper"]')
        .should('be.hidden');
      cy.get('[data-cy="subject"]').type('Just Testing This Biz');
      cy.get('[data-cy="showMessageButton"]').click();
      cy.get('[data-cy="messageWrapper"]')
        .should('be.visible');
      cy.get('[data-cy="message"]').type(' ');
      cy.get('[data-cy="showEmailButton"]').click();
      cy.get('[data-cy="label"]')
      .should(($lbl) => {
        expect($lbl).to.contain('Message');
        expect($lbl).to.have.class('invalidEntry');
      });
      cy.get('[data-cy="validationMessage"]')
        .should(($msg) => {
          expect($msg).to.contain('A valid message is required.');
        });
      cy.get('[data-cy="emailWrapper"]')
        .should('be.hidden');
      cy.get('[data-cy="message"]')
        .type('Here I am writing a letter to you in this test file. I hope you enjoy it');
      cy.get('[data-cy="showEmailButton"]').click();
      cy.get('[data-cy="emailWrapper"]')
        .should('be.visible');

      cy.get('[data-cy="email"]').type(' ');
      cy.get('[data-cy="sendMessageButton"]').click();
      cy.get('[data-cy="label"]')
      .should(($lbl) => {
        expect($lbl).to.contain('Email');
        expect($lbl).to.have.class('invalidEntry');
      });
        cy.get('[data-cy="validationMessage"]')
        .should(($msg) => {
          expect($msg).to.contain('A valid email is required.');
        });
      cy.get('[data-cy="email"]')
        .type('chrisrudnicky@gmail.com');
      cy.get('[data-cy="sendMessageButton"]').click();
      cy.get('[data-cy="modalWrapper"]')
        .should('be.visible');
      });

    it('focus is given to the name when the name field is displayed', () => {
      // should('have.focus')
    });
    it('focus is given to the subject when the subject field is displayed', () => {

    });
    it('focus is given to the message when the message field is displayed', () => {

    });
    it('focus is given to the email with the email field is displayed', () => {

    });
    it('the name value is retained when navigating back from the subject view', () => {

    });
    it('the subject value is retained when navigating back from the message view', () => {

    });
    it('the message value is retained when navigaing back from the email view', () => {

    });
  });
  describe('Form submission message', () => {
    it('successful form submission will hide the form and the page header and show the success message', () => {
      cy.fillOutContactForm();
      // cy.get('[data-cy="sendMessageButton"]').click();
      cy.get('[data-cy="succssMessageWrapper"]')
        .should('exist')
        .and('be.visible');
    });
    it('A successful form submission will return the appropriate message and animation', () => {
      
    });
    it('An unsuccessful form submission will return an error message', () => {

    });
  });
});