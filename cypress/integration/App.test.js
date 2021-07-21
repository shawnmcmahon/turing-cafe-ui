describe('Reservation App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  
  it('Should see the home page', () => {
    cy.get('div')
      .should('be.visible') 
  })

  it('Should see the app title', () => {
    cy.get('h1')
    .should('be.visible')
    .contains('Turing Cafe Reservations')
  })

  it('Should see the form', () => {
    cy.get('form')
      .should('be.visible')
  })

  it('Should see the input form', () => {
    cy.get('input')
      .should('be.visible')
  })

  it('Should see a make reservation button', () => {
    cy.get('button')
      .should('be.visible')
  })


})

