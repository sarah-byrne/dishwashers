describe("Product Grid", () => {
  it("Displays a grid of dishwashers", () => {
    cy.visit("/");
    cy.get("h1").contains("Dishwashers");
  });
});
