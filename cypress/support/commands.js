Cypress.Commands.add('viewFormName', () => {
  cy.get('[data-cy="showFormButton"]').click();
});
Cypress.Commands.add('viewFormSubject', () => {
  cy.get('[data-cy="showFormButton"]').click();
  cy.get('[data-cy="name"]').type('Chris');
  cy.get('[data-cy="showSubjectButton"]').click();
});
Cypress.Commands.add('viewFormMessage', () => {
  cy.get('[data-cy="showFormButton"]').click();
  cy.get('[data-cy="name"]').type('Chris');
  cy.get('[data-cy="showSubjectButton"]').click();
  cy.get('[data-cy="subject"]').type('testing');
  cy.get('[data-cy="showMessageButton"]').click();
});
Cypress.Commands.add('viewFormEmail', () => {
  cy.get('[data-cy="showFormButton"]').click();
  cy.get('[data-cy="name"]').type('Chris');
  cy.get('[data-cy="showSubjectButton"]').click();
  cy.get('[data-cy="subject"]').type('testing');
  cy.get('[data-cy="showMessageButton"]').click();
  cy.get('[data-cy="message"]').type('I am the message!');
  cy.get('[data-cy="showEmailButton"]').click();
});

Cypress.Commands.add('fillOutContactFormCorrectly', () => {
  cy.fixture('emailjs.json').then((request) => {
    return request.success;
  });
});

Cypress.Commands.add('fillOutContactFormIncorrectly', () => {
  cy.fixture('email.json').then((request) => {
    return request.failure;
  });
});

  // cy.visit({
  //   method: 'POST',
  //   url: Cypress.env('emailURL'),
  //   headers: {
  //     'Content-Type' : 'application/json',
  //   },
  //   body: {
  //     user_id: Cypress.env('userID'),
  //     service_id: Cypress.env('serviceID'),
  //     template_id: Cypress.env('templateID'),
  //     template_params: {
  //       nme: "Chris",
  //       sbjct: "Cypress Testing",
  //       msg: "Test test, this is a test.",
  //       eml: "chrisrudnicky@gmail.com"
  //     }
  //   }
  // });