import {receivePersonalProjects} from '../../src/actions';
const dispatch = action => cy.window().its('store').invoke('dispatch', action);


describe('./projects view integration tests', () => {
  beforeEach(() => {
    // cy.fixture('projects/personalProjects.json').as('pP_JSON');
    // cy.fixture('projects/githubProjects.json').as('gH_JSON');
    // cy.server();
    // cy.route('GET', '/', '@gH_JSON').as('getGithubProjects');
    // cy.wait('@getGithubProjects');
    // cy.fixture('projects/personalProjects').then(projects => {
    //   cy.visit('./projects', {
    //     onBeforeLoad: win => {
    //       win.initialState = projects.personalProjects
    //     }
    //   });
    // });
  });
  describe('Chartjs integration behavior', () => {
    it('if no api call to github is made, then loading bars display', () => {

    });
    it('if api call to github is made ChartJs displays', () => {

    });
  });

  /**
   * These tests should not be run with Cypress.  This test essentially should be a uint test on the 
   * click method given to the button
   */

  // describe('Projects in development', () => {
  //   it('clicking read me changes the window location to the github readme', () => {
  //    
  //     });
  //   });
  //   it('clicking github changes the window location to the project github', () =>{

  //   });
  // });
  // describe('Projects on Github', () => {
  //   it('clicking view source code directs to the github repo', () => {

  //   });
  // });
  describe('Language icons', () => {
    it.only('if the lanugague uses c#, then the icon src will be for the c# png', () => {
     cy.setStateAndVisit('./projects', 'personalProjects', 'projects/personalProjects');
    });
    it('if the lanugague uses TypeScript, then the icon src will be for the TypeScript png', () => {

    });
    it('if the lanugague uses JavaScript, then the icon src will be for the JavaScript png', () => {

    });
    it('if the lanugague uses Vue, then the icon src will be for the Vue png', () => {

    });
    it('if the lanugague uses React, then the icon src will be for the React png', () => {

    });
    it('if the lanugague uses Angular, then the icon src will be for the Angular png', () => {

    });
    it('if the lanugague uses MySQL, then the icon src will be for the MySQL png', () => {

    });
    it('if the project uses Firebase, then the icon src will be for the MySQL png', () => {

    });
  });
});