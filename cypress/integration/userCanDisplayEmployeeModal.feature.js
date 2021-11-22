describe('Visiting the application, a user can click the view button next to an employee', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://reqres.in/api/users**', {
      fixture: 'usersResponse.json'
    });
    cy.intercept('GET', 'https://reqres.in/api/users/**', {
      fixture: 'usersResponseOneItem.json'
    });
    cy.visit('/');
    cy.get('[data-cy=employee-1]').within(() => {
      cy.get('[data-cy=view-employee-button]').click();
    });
  });

  it('is expected to open up a modal', () => {
    cy.get('[data-cy=modal-container]').should('be.visible');
  });

  it("is expected to see in the modal employee's name, image and email", () => {
    cy.get('[data-cy=modal-container]').within(() => {
      cy.get('[data-cy=employee-name]').should('contain.text', 'Thomas Bluth');
      cy.get('[data-cy=employee-image]').should('be.visible');
      cy.get('[data-cy=employee-email]').should('contain.text', 'george.bluth@reqres.in');
    });
  });
});
