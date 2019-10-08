context('/bio view integration tests', () => {
  beforeEach(() => {
    cy.visit('/bio');
  });
  describe('Social Media Links', () => {
    it('The Github icon contains an <a> with the 68thandMaine Github URL', () => {
      cy.get('[data-cy="githubLink"]')
        .should('have.attr', 'href')
        .and('eq', 'https://www.github.com/68thandMaine');
    });
    it('The Linkedin icon contains an <a> with my Linkedin URL', () => {
      cy.get('[data-cy="linkedinLink"]')
      .should('have.attr', 'href')
      .and('eq', 'https://www.linkedin.com/in/crudnicky');
    });
    it('The instagram icon contains an <a> with my instagram URL', () => {
      cy.get('[data-cy="instagramLink"]')
      .should('have.attr', 'href')
      .and('eq', 'https://www.instagram.com/virginiathekid');
    });
    it('hovering over the linkedin icon will display "linkedin" in caps', () => {
      cy.get('[data-cy="linkedinLink').trigger('mouseover');
      cy.get('[data-cy="socialMediaAccount"]').then(($p) => {
        expect($p).to.have.text('linkedin');
      });
    });
    it('hovering over the instagram icon will display "instagram" in caps', () => {
      cy.get('[data-cy="instagramLink').trigger('mouseover');
      cy.get('[data-cy="socialMediaAccount"]').then(($p) => {
        expect($p).to.have.text('instagram');
      });
    });
    it.only('hovering over the github icon will display "github" in caps', () => {
      cy.get('[data-cy="githubLink').trigger('mouseover');
      cy.get('[data-cy="socialMediaAccount"]').then(($p) => {
        expect($p).to.have.text('github');
      });
    });
  });
  describe('Buttons', () => {
    it('clicking the resume button will redirect to the resume page', () => {
      cy.get('[data-cy="resumeButton"]')
        .click();
      cy.url()
        .should('include', '/resume');
    });
  });
});