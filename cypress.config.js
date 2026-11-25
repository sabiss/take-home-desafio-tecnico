const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    bareUrl: "https://vagas.quarkrh.com.br/esig",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
