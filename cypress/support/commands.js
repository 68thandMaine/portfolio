Cypress.Commands.add('viewFormName', () => {
  cy.get('[data-cy="showFormButton"]').click();
});
Cypress.Commands.add('viewFormSubject', () => {
  cy.get('[data-cy="showFormButton"]').click();
  cy.get('[data-cy="showSubjectButton"]').click();
});
Cypress.Commands.add('viewFormMessage', () => {
  cy.get('[data-cy="showFormButton"]').click();
  cy.get('[data-cy="showSubjectButton"]').click();
  cy.get('[data-cy="showMessageButton"]').click();
});
Cypress.Commands.add('viewFormEmail', () => {
  cy.get('[data-cy="showFormButton"]').click();
  cy.get('[data-cy="showSubjectButton"]').click();
  cy.get('[data-cy="showMessageButton"]').click();
  cy.get('[data-cy="showEmailButton"]').click();
});
Cypress.Commands.add('fillOutContactForm', () => {
  cy.visit({
    method: 'POST',
    url: Cypress.env('emailURL'),
    headers: {
      'Content-Type' : 'application/json',
    },
    body: {
      user_id: Cypress.env('userID'),
      service_id: Cypress.env('serviceID'),
      template_id: Cypress.env('templateID'),
      template_params: {
        nme: "Chris",
        sbjct: "Cypress Testing",
        msg: "Test test, this is a test.",
        eml: "chrisrudnicky@gmail.com"
      }
    }
  });
})