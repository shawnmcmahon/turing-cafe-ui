describe('Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })


  it('Should have value reflected in form input when typing data into form', () => {
    cy.get('input')
      .should('have.value', '')
  })




})
