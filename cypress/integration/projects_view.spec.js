import { receiveRepos } from '../../src/actions'
const dispatch = action => cy.window().its('store').invoke('dispatch', action)

describe('./projects view integration tests', () => {

  describe('Chartjs integration behavior', () => {
    beforeEach(()=>{
      cy.visit('/projects')
    });
    it('if github state is empty, then loading bars display', () => {
      cy.fixture('projects/githubProjects').then(repos => {
        dispatch(receiveRepos(repos.data.noRepos));
      });
      cy.get('[data-cy="chart"]').should('not.exist');
      cy.get('[data-cy="loadingBars"]').should('be.visible');
    });
    it('if api call to github is made ChartJs displays', () => {
      cy.get('[data-cy="chart"]').should('be.visible');
      cy.get('[data-cy="loadingBars"]').should('not.exist');
    });
  });
  describe('Projects in development', () => {
    before(() => {
      cy.setStateAndVisit('./projects', 'personalProjects', 'projects/personalProjects');
    });
    it('the total number of cards on the page should be equal to the number of objects in state', () => {
      cy.get('[data-cy="personalProjectCard"]').should('have.length', 9);
    });
    it('Language icons are unique to their project language', () => {
      cy.get('[data-cy="personalProjectCard"]').then((card) => {
        console.log(card)
        const cSharp = card[0];
        const javaScript = card[1];
        const typeScript = card[2];
        const vue = card[3];
        const react = card[4];
        const angular = card[5];
        const mySql = card[6];
        const fireBase = card[7];
        const html = card[8];
        
        cy.wrap(cSharp).within((project) => {
          console.log(javaScript)
          expect(project).to.contain('C# EXAMPLE');
          expect(project).to.have.descendants('.languageIcons');
          cy.get('[data-cy="languageIcons"]')
            .children()
            .should('have.attr', 'src')
            .and('match', /csharp/);
        });
        cy.wrap(javaScript).within((project) => {
          expect(project).to.contain('JavaScript EXAMPLE');
          expect(project).to.have.descendants('.languageIcons');
          cy.get('[data-cy="languageIcons"]')
            .children()
            .should('have.attr', 'src')
            .and('match', /javascript/);
        });
        cy.wrap(typeScript).within((project) => {
          expect(project).to.contain('TypeScript EXAMPLE');
          expect(project).to.have.descendants('.languageIcons');
          cy.get('[data-cy="languageIcons"]')
            .children()
            .should('have.attr', 'src')
            .and('match', /typescript/);
        });
        cy.wrap(vue).within((project) => {
          expect(project).to.contain('Vue EXAMPLE');
          expect(project).to.have.descendants('.languageIcons');
          cy.get('[data-cy="languageIcons"]')
            .children()
            .should('have.attr', 'src')
            .and('match', /vue/);
        });
        cy.wrap(react).within((project) => {
          expect(project).to.contain('React EXAMPLE');
          expect(project).to.have.descendants('.languageIcons');
          cy.get('[data-cy="languageIcons"]')
            .children()
            .should('have.attr', 'src')
            .and('match', /react/);
        });
        cy.wrap(angular).within((project) => {
          expect(project).to.contain('Angular EXAMPLE');
          expect(project).to.have.descendants('.languageIcons');
          cy.get('[data-cy="languageIcons"]')
            .children()
            .should('have.attr', 'src')
            .and('match', /angular/);
        });
        cy.wrap(mySql).within((project) => {
          expect(project).to.contain('MySql EXAMPLE');
          expect(project).to.have.descendants('.languageIcons');
          cy.get('[data-cy="languageIcons"]')
            .children()
            .should('have.attr', 'src')
            .and('match', /mysql/);
        });
        cy.wrap(fireBase).within((project) => {
          expect(project).to.contain('Firebase EXAMPLE');
          expect(project).to.have.descendants('.languageIcons');
          cy.get('[data-cy="languageIcons"]')
            .children()
            .should('have.attr', 'src')
            .and('match', /firebase/);
        });
        cy.wrap(html).within((project) => {
          expect(project).to.contain('HTML EXAMPLE');
          expect(project).to.have.descendants('.languageIcons');
          cy.get('[data-cy="languageIcons"]')
            .children()
            .should('have.attr', 'src')
            .and('match', /html/);
        })
    });
  });
  });
});