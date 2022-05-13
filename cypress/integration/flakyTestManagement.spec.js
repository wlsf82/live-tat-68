describe('Flaky test managment', () => {
  Cypress._.times(10, index => {
    it(`${index + 1} - waits for paragraph to appear`, () => {
      cy.visit('./index.html')
      cy.contains('p', 'I finally appeared.')
    })
  })
})
