/// <reference types="cypress" />
describe("otwieranie strony", () => {
  it("Logowanie", () => {
    cy.visit("https://facebook.com");
    cy.get("[data-testid=cookie-policy-dialog-accept-button]").click();
    cy.get("[data-testid=open-registration-form-button]").click();
    cy.get("#u_3_b_GE").type("Jan");
    cy.get("#u_3_d_4f").type("Jan");
  });
});
