// tests.spec.js
beforeEach( () =>
  cy.visit('/')
);

describe('desktop-tests', () => {
  // Tests here
  it("interacts with the homepage", () => {
    cy.viewport(1366,768)
    cy.pause();
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.segment-button-after-checked').click();
    cy.get('[value="all"]').click();
    /* ==== End Cypress Studio ==== */
  })
});

describe('mobile-tests', () => {
  // Tests here
  it("interacts with the mobile homepage", () => {
    cy.viewport(320, 568);
    cy.pause();
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#tab-button-speakers > ion-icon.md').click();
    cy.get('#tab-button-about').click();
    /* ==== End Cypress Studio ==== */
  })
});