/// <reference types="cypress" />

const selectors = {
  app_container: '[data-testid="app_container"]',
  theme_switch: '[data-testid="theme_switch"]',
};

describe("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders without crashing", () => {
    cy.get(selectors.app_container).should("exist");
  });

  it("toggles the theme", () => {
    cy.get(selectors.theme_switch).click();
    cy.get('[aria-label="Switch to dark mode"]').should("exist");
  });
});
