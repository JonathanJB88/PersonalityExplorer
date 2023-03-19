describe('Responsive design', () => {
  context('Desktop', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.viewport(1280, 720);
    });

    it('should display the desktop version', () => {
      cy.get('[data-cy=desktop]').should('be.visible');
      cy.get('[data-cy=mobile]').should('not.be.visible');
    });
  });

  context('Mobile', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.viewport(430, 932); // iphone 14 Pro Max
    });

    it('should display the mobile version', () => {
      cy.get('[data-cy=desktop]').should('not.be.visible');
      cy.get('[data-cy=mobile]').should('be.visible');
    });

    it('should display the menu options', () => {
      cy.get('[data-cy=mobile]').click();
    });

    it('should hide the menu options when clicking one of them', () => {
      cy.get('[data-cy=mobile]').click();
      cy.get('[data-cy="desktop"] > .flex > :nth-child(1)').click();
      cy.get('[data-cy=mobile]').click();
      cy.get('[data-cy="desktop"] > .flex > :nth-child(3)').click();
      cy.get('[data-cy=mobile]').click();
      cy.get('[data-cy="desktop"] > .flex > :nth-child(4)').click();
    });
  });
});

export {};
