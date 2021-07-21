describe('Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })


  it('Should have value reflected in form input when typing data into form', () => {
    cy.get('[data-cy=date]')
      .type('1/1/21')
      .should('have.value', '1/1/21')
    cy.get('[data-cy=name]')
      .type('Shawn')
      .should('have.value', 'Shawn')
    cy.get('[data-cy=time]')
      .type('7:00')
      .should('have.value', '7:00')
    cy.get('[data-cy=number]')
      .type('3')
      .should('have.value', '3')
  })


  it('Should be able to add a reservation to the page', () => {
    cy.get('[data-cy=date]')
      .type('1/1/21')
    cy.get('[data-cy=name]')
      .type('Shawn')
    cy.get('[data-cy=time]')
      .type('7:00')
      .should('have.value', '7:00')
    cy.get('[data-cy=number]')
      .type('3')
    cy.get('button').click()
    cy.get('div')
      .contains('Shawn')
  })


})
