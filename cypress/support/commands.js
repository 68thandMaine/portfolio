import { receiveRepos } from '../../src/actions'
const dispatch = action => cy.window().its('store').invoke('dispatch', action)

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

Cypress.Commands.add('setStateAndVisit', (url, stateField, fixture) => {
  cy.fixture(fixture).then(data=> {
    cy.visit(url, {
      onBeforeLoad: win => {
        switch(stateField) {
          case 'personalProjects' : {
            win.initialState = data.personalProjects;
            break;
          }
          // case 'githubProjects': {
          //   // For now this is unused as Cypress does not support interacting with 
          //   // the fetch api and I cannot overwrite the call setting githubproject state.
          //   break;
          // }
          default:
            return null;
        }
      }
    });
  });
});