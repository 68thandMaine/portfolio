describe('sidebar navigation behavior', () => {
  before(() => {
    cy.visit('./');
  });
  context('Menu Icon', () => {
    it('the menu button is fixed on the page and is visible on all views', () => {
      cy.get('[data-cy="menuButton"]')
        .should('be.visible')
        .and('have.css', 'position')
        .and('eq','fixed');
      cy.visit('./bio')
      cy.get('[data-cy="menuButton"]')
        .should('be.visible');
      cy.visit('./projects')
      cy.get('[data-cy="menuButton"]')
      .should('be.visible');
      cy.visit('./contact')
      cy.get('[data-cy="menuButton"]')
        .should('be.visible');
    });
    it('clicking the menu icon opens the sidebar menu and hides the menu button', () => {
      cy.get('[data-cy="sidebar"]').should('not.exist');
      cy.get('[data-cy="menuButton"]').click();
      cy.get('[data-cy="sidebar"]').should('exist');
    });
  });
  context('Mobile view', () => {
    before(() => {
      cy.visit('./');
      cy.viewport(411, 600);
    });
    it('if the viewport max width is 600px, the mobile sidebar menu will show', () => {
      cy.get('[data-cy="menuButton"]').click();
      cy.get('[data-cy="sidebar"]').should('be.visible').within((sidebar) => {
        cy.get('[data-cy="mobileMenuHeader"]')
          .should('be.visible').then((header) => {
            expect(header).to.have.html('MENU');
          })
      })
    });
  });
});