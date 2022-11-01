import { defineConfig } from "cypress";

module.exports = defineConfig({

  e2e: {
    experimentalStudio: true ,
    baseUrl: "http://localhost:8100",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
