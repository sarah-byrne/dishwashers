describe("Product Grid", () => {
  it("Displays a header of Dishwashers", () => {
    cy.visit("/");
    cy.get("h1").contains("Dishwashers");
  });
  it("Displays a grid of dishwashers", () => {
    cy.visit("/");
    cy.get("#dishwasherSummary1").contains("£1000");
  });
});
