describe("Product Grid", () => {
  it("Displays a header of Dishwashers", () => {
    cy.visit("/");
    cy.get("h1").contains("Dishwashers");
  });
  it("Displays a grid of dishwashers", () => {
    cy.visit("/");
    cy.get("#dishwasherSummary0").contains("£219.00");
  });
});
