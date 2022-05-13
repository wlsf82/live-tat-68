describe('Flaky test managment', () => {
  beforeEach(() => cy.visit('./index.html'))

  Cypress._.times(10, index => {
    it(`${index + 1} - waits for paragraph to appear`, () => {
      cy.contains('p', 'I finally appeared.', { timeout: 10100})
    })
  })

  Cypress._.times(3, index => {
    it(`${index + 1} - waits for heading 1 to appear`, () => {
      cy.contains('h1', 'Flaky Test Management')
    })
  })
})
