describe('test Pixema', () => {
  it('download Pixema', () => {
    cy.visit('http://localhost:3000/');
  })
  it('search works', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-test="cypress-searchInput"]').should("exist");
    cy.get('[data-test="cypress-searchInput"]').type("king");
    cy.get('[data-test="cypress-searchContainer"]').children().contains("king", { matchCase: false });
  })
})