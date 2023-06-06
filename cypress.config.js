const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rdch76",
  viewportHeight: 1080,
  viewportWidth: 1920,
  env:{
    email: 'admin@tecdiary.com',
    password: '12345678'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://sma.tecdiary.net/admin',
    excludeSpecPattern: [
      '**/1-getting-started/*',
      '**/2-advanced-examples/*'
    ],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
});
