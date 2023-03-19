describe('CTASection Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get('.px-8').click();
  });

  it('renders three feature cards with the correct title and description', () => {
    cy.get('.py-8 > .container > .grid >')
      .should('have.length', 3)
      .each((card, index) => {
        cy.wrap(card).should('contain.html', 'h3');
        cy.wrap(card).should('contain.html', 'p');
      });
  });
  it('renders the call to action text and button', () => {
    cy.get('.text-2xl').should('contain', 'Are you ready to explore your personality?');
    cy.get('.px-8').should('contain', 'Start the test');
  });
  it('renders the testimonials section', () => {
    cy.get('.rounded-lg > .container > .grid >').should('have.length', 3);
    cy.get('.rounded-lg > .container > .grid >').each((testimonial, index) => {
      cy.wrap(testimonial).should('contain.html', 'img');
      cy.wrap(testimonial).should('contain.html', 'p');
      cy.wrap(testimonial).should('contain.html', 'p');
    });
  });
  it('CTA button should redirect to the test page', () => {
    cy.get('.px-8').click();
    cy.url().should('include', '/test');
  });
});

export {};
