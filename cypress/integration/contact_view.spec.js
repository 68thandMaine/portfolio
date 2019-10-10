
context('/contact view integration tests', () => {
  beforeEach(() => {
    cy.visit('./contact');
  })
  describe('Button behavior', () => {
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
          .and('contain', 'Full Name / Company Name');
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
    it('form fields are required and will not advance unless a valid input is received', () => {
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
      });

    it('focus is given to the name when the name field is displayed', () => {
      cy.viewFormName();
      cy.get('[data-cy="name"]')
        .should('have.focus');
    });
    it('focus is given to the subject when the subject field is displayed', () => {
      cy.viewFormSubject();
      cy.get('[data-cy="subject"]')
        .should('have.focus');
    });
    it('focus is given to the message when the message field is displayed', () => {
      cy.viewFormMessage();
      cy.get('[data-cy="message"]')
        .should('have.focus');
    });
    it('focus is given to the email with the email field is displayed', () => {
      cy.viewFormEmail();
      cy.get('[data-cy="email"]')
        .should('have.focus');
    });
    it('the name value is retained when navigating back from the subject view', () => {
      cy.viewFormSubject();
      cy.get('[data-cy="goBackToNameButton"]').click();
      cy.get('[data-cy="name"]').should(($name) => {
        expect($name).to.have.value('Chris');
      });
    });
    it('the subject value is retained when navigating back from the message view', () => {
      cy.viewFormMessage();
      cy.get('[data-cy="goBackToSubjectButton"]').click();
      cy.get('[data-cy="subject"]').should(($subject) => {
        expect($subject).to.have.value('testing');
      })
    });
    it('the message value is retained when navigaing back from the email view', () => {
      cy.viewFormEmail();
      cy.get('[data-cy="goBackToMessageButton"]').click();
      cy.get('[data-cy="message"]').should(($message) => {
        expect($message).to.have.value('I am the message!');
      });
    });
  });
});
  
  
  /**
   * The test case below is not ready. Cypress cannot intercept fetch requests, so I have to hack a way around the fetch requests my portfolio makes. I believe this is more of a unit test anyways...
   */
  
  
  // describe('Form submission message', () => {
  //   it('successful form submission will hide the form and the page header and show the success message', () => {
  //     cy.fixture('emailjs.json').as('email');
  //     cy.visit('/contact');
  //     cy.viewFormEmail();
  //     cy.get('[data-cy="email"]').type('chrisrudnicky@gmail.com')
  //     cy.get('[data-cy="sendMessageButton"]').then((button) => {
  //       cy.window().then((win) => {
  //         cy.stub(win, 'handleSendMessage', '@email.correctEmail');
  //         button.click();
  //       });
  //     });
  //     cy.get('[data-cy="sendingWrapper"]').should('exist')
  //   });
  //   it('An unsuccessful form submission will hide the form and page header and show the error message', () => {
  //     cy.fillOutContactFormIncorrectly();
  //   });
  // });

