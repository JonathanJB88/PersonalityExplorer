describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  describe('Header', () => {
    it('renders the logo image', () => {
      cy.get('header').find('img[alt="Personality Explorer Test Logo"]').should('be.visible');
    });
    it('renders the logo text', () => {
      cy.get('.ml-2').should('contain', 'Personality Explorer');
    });
    it('renders the nav links', () => {
      cy.get('header').find('a').should('have.length', 4);
      cy.get('header').find('a').contains('Home').should('be.visible');
      cy.get('header').find('a').contains('About').should('be.visible');
      cy.get('header').find('a').contains('Contact').should('be.visible');
      cy.get('header').find('a').contains('Test').should('be.visible');
    });
  });

  describe('Body', () => {
    it('should render the home page', () => {
      cy.get('.text-3xl').should('contain', 'Discover Your Personality');
      cy.get('.mt-6').should('contain', 'personality test');
    });

    it('should render a call to action button', () => {
      cy.get('.px-8').should('contain', 'Start Test');
    });

    it('CTA button should redirect to the CTA section page', () => {
      it('CTA button should redirect to CTA section page', () => {
        cy.get('.px-8').click();
        cy.get('.text-2xl').should('contain', 'Are you ready to explore your personality?');
      });
    });
  });

  describe('Footer', () => {
    it('should render the footer', () => {
      cy.get('footer').should('be.visible');
    });
    it('renders the social media icons, call to action and redirects to their websites', () => {
      const expectedUrls = {
        facebook: 'https://www.facebook.com',
        twitter: 'https://www.twitter.com',
        instagram: 'https://www.instagram.com',
        linkedin: 'https://www.linkedin.com',
      };
      cy.get('.mb-1').should('contain', 'Follow Us');
      cy.get('footer')
        .find('a')
        .should('have.length', 4)
        .each((link, index) => {
          cy.wrap(link).should('have.attr', 'href').and('include', Object.values(expectedUrls)[index]);
        });
    });
    it('renders the copyrigth text', () => {
      cy.get('.text-sm').should('contain', 'Personality Explorer');
    });
  });
});

export {};
