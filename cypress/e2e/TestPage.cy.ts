describe('Test Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/test');
  });

  it('renders the test page', () => {
    cy.get('.text-3xl').should('contain', 'Questions');
  });

  it('renders the questions with their options', () => {
    cy.get('.p-6').find('.mb-8').should('be.visible');
    cy.get('.p-6 > ul').find('.w-full').should('contain', 'A.');
    cy.get('.p-6 > ul').find('.w-full').should('contain', 'B.');
  });

  it('changes to the next question when one of the options is clicked', () => {
    cy.get('.p-6 > ul > :nth-child(1)').click();
    cy.get('.p-6').find('.mb-8').should('be.visible');
    cy.get('.p-6 > ul').find('.w-full').should('contain', 'A.');
    cy.get('.p-6 > ul').find('.w-full').should('contain', 'B.');
    cy.get('.p-6 > ul > :nth-child(2)').click();
    cy.get('.p-6').find('.mb-8').should('be.visible');
    cy.get('.p-6 > ul').find('.w-full').should('contain', 'A.');
    cy.get('.p-6 > ul').find('.w-full').should('contain', 'B.');
  });

  describe('Test behavior', () => {
    beforeEach(() => {
      cy.get('.p-6 > ul > :nth-child(1)').click();
      cy.get('.p-6 > ul > :nth-child(2)').click();
      cy.get('.p-6 > ul > :nth-child(1)').click();
      cy.get('.p-6 > ul > :nth-child(2)').click();
      cy.get('.p-6 > ul > :nth-child(1)').click();
    });

    it('renders the alert when all questions are answered and renders the modal results when clicked on it', () => {
      cy.get('.go3958317564 > .flex').should('be.visible');
      cy.get('.go3958317564 > .flex').click();
      cy.get('.mb-2').should('be.visible');
      cy.get('.mb-2').should('contain', 'Your Test Results');
      cy.get('.relative > .block').should('be.visible');
      cy.get('.relative > .block').should('contain', 'want to take the test again?');
      cy.get('.w-48').should('be.visible');
      cy.get('.fixed > .relative').find('h4').should('be.visible');
      cy.get('.fixed > .relative').find('p').should('be.visible');
    });

    it('resets the test when the CTA button is clicked', () => {
      cy.get('.go3958317564 > .flex').should('be.visible');
      cy.get('.go3958317564 > .flex').click();
      cy.get('.relative > .block').click();
      cy.get('.p-6').find('.mb-8').should('be.visible');
    });
  });
});

export {};
