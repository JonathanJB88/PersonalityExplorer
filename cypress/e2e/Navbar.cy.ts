describe('Navbar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('renders the CTA section when test link is clicked', () => {
    cy.get('header').find('a').contains('Test').click();
    cy.get('[aria-label="CTA"] > .container').should('be.visible');
  });

  it('renders the home page when home link is clicked', () => {
    cy.get('header').find('a').contains('Home').click();
    cy.get('.text-3xl').should('contain', 'Discover Your Personality');
    cy.get('.px-8').contains('Start Test').should('be.visible');
  });

  it('restart the test when home button is clicked', () => {
    cy.get('header').find('a').contains('Test').click();
    cy.get('[aria-label="CTA"] > .container').find('.px-8').click();
    cy.get('header').find('a').contains('Home').click();
    cy.get('.text-3xl').should('contain', 'Discover Your Personality');
    cy.get('.px-8').contains('Start Test').should('be.visible');
  });

  it('redirects to the about page when about link is clicked', () => {
    cy.get('header').find('a').contains('About').click();
    cy.get('.text-3xl').should('contain', 'Discover Your Personality');
    cy.get('.px-8').contains('Start Test').should('be.visible');
  });

  it('redirects to the contact page when contact link is clicked', () => {
    cy.get('header').find('a').contains('Contact').click();
    cy.get('.text-3xl').should('contain', 'Discover Your Personality');
    cy.get('.px-8').contains('Start Test').should('be.visible');
  });
});

export {};
