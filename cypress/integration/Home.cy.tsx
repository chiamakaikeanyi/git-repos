import React from "react";

import { mount } from "cypress/react18";

import Home from "../../src/pages/Home/Home";
import { UserContextProvider } from "../../src/context/UserContext";

const selectors = {
  container: "[data-testid='home_container']",
};

describe("Home", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mount(
      <UserContextProvider>
        <Home />
      </UserContextProvider>
    );
    cy.get(selectors.container).should("be.visible");
  });
});
