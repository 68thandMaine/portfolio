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
      cy.get('[data-cy="sidebar"]').should('be.visible');
      cy.get('[data-cy="closeSidebarButton"]').click();
      cy.get('[data-cy="sidebar"]').should('not.be.visible');
    });
  });
  context('Mobile view', () => {
    beforeEach(() => {
      cy.visit('./');
      cy.viewport(411, 600);
    });
    it('if the viewport max width is 600px, the mobile sidebar menu will show', () => {
      cy.get('[data-cy="menuButton"]').click();
      cy.get('[data-cy="sidebar"]').should('be.visible').within((sidebar) => {
        cy.get('[data-cy="mobileMenuHeader"]')
          .should('be.visible').then((header) => {
            expect(header).to.have.html('MENU');
          });
      });
      cy.get('[data-cy="mobileCloseSidebarButton"]').click();
    });
    it('Menu items have borders and backgrounds to look like buttons', () => {
      cy.get('[data-cy="menuButton"]').click();
      cy.get('.sidebarLink').then((navLinks) => {
        for(let i = 0; i<navLinks.length; i++) {
          expect(navLinks[i]).to.have.css('border', '1px solid rgb(255, 255, 255)')
          console.log(navLinks[i]);
          expect(navLinks[i]).to.have.css('background', 'rgba(58, 54, 54, 0.6) none repeat scroll 0% 0% / auto padding-box border-box');
        }
      });
    });
    it('Menu button has an increased size', () => {
      cy.get('[data-cy="menuButton"]')
        .should('have.css', 'height')
        .and('eq', '63.78px') // this value === 15.5vw. Cypress requires px values.
        cy.get('[data-cy="menuButton"]')
        .should('have.css', 'width')
        .and('eq', '63.78px'); // this value === 15.5vw. Cypress requires px values.
  });
});
  context('sidebar navLinks', () => {
    beforeEach(() => {
      cy.get('[data-cy="menuButton"]').click();
    });
    it('The home link visits "/" and sets the background image to home', () =>  {
      cy.get('[data-cy="homeLink"]')
      .should('be.visible')
      .then((button) => {
        expect(button).to.have.html('Home');
      })
      .click();
      cy.url().should('include', '/');
      cy.get('[data-cy="backgroundImage"]').then((image) => {
        expect(image[0].src).to.match(/HomeBG/);
      });
    });
    it('The about me link visitis "/bio" and sets the background image to about', () => {
      cy.get('[data-cy="bioLink"]')
        .should('be.visible')
        .then((button) => {
          expect(button).to.have.html('About Me');
        })
        .click();
      cy.url().should('include', '/bio');
      cy.get('[data-cy="backgroundImage"]').then((image) => {
        expect(image[0].src).to.match(/AboutBG/);
      });
    });
    it('The work link visitis "/projects" and sets the background image to work', () => {
      cy.get('[data-cy="projectsLink"]')
        .should('be.visible')
        .then((button) => {
          expect(button).to.have.html('Work');  
        })
        .click();
      cy.url().should('include', '/projects');
      cy.get('[data-cy="backgroundImage"]').then((image) => {
        expect(image[0].src).to.match(/ProjectBG/);
      });
    });
    it('The contact link visitis "/contact" and sets the background image to contact', () => {
      cy.get('[data-cy="contactLink"]')
        .should('be.visible')
        .then((button) => {
          expect(button).to.have.html('Contact');
        })
        .click();
      cy.url().should('include', '/contact');
      cy.get('[data-cy="backgroundImage"]').then((image) => {
        expect(image[0].src).to.match(/ContactBG/);
      });
    });
  });
});