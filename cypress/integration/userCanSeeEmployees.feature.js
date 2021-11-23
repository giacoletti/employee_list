describe('Visiting the application, a user', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://reqres.in/api/users**', {
      fixture: 'usersResponse.json'
    }).as("fetchData");
    cy.visit('/');
    cy.wait('@fetchData');
  });

  // Cypress.on('uncaught:exception', (err, runnable, promise) => {
  //   // when the exception originated from an unhandled promise
  //   // rejection, the promise is provided as a third argument
  //   // you can turn off failing the test in this case
  //   if (promise) {
  //     return false
  //   }
  //   // we still want to ensure there are no other unexpected
  //   // errors, so we let them fail the test
  // })

  it('is expected to see a header', () => {
    cy.get('[data-cy=employee-header]').should('contain.text', 'Employee List');
  });

  it('is expected to return an array of data', () => {
    cy.get('@fetchData').its('response.body.data').should('be.an', 'array');
    // cy.wait('@fetchData').its('response.body.data').should('be.an', 'array');
  });

  describe('can see an employee list and', () => {
    
    it('is expected to see 5 list items', () => {
      cy.get('[data-cy=employee-list]').children().should('have.length', 5);
    });

    it('is expected to see first employee picture and full name', () => {
      cy.get('[data-cy=employee-1]').within(() => {
        cy.get('.image').should('be.visible');
        cy.get('.header').should('contain.text', 'Thomas Bluth');
      });
    });
  });

});
