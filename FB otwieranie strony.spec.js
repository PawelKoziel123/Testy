/// <reference types="cypress" />
describe("otwieranie strony", () => {
  it("should open Facebook", () => {
    cy.visit("https://facebook.com");
  });
});
