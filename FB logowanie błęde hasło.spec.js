/// <reference types="cypress" />
describe("otwieranie strony", () => {
  it("Logowanie", () => {
    cy.visit("https://facebook.com");
    cy.get("[data-testid=cookie-policy-dialog-accept-button]").click();
    cy.get("[data-testid=royal_email]").type("testapppp39@gmail.com");
    cy.get("#passContainer").type("11111");
    cy.get("[data-testid=royal_login_button]").click();
  });
});
