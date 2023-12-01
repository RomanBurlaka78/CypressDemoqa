const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl : 'https://demoqa.com/tool-tips',
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    defaultCommandTimeout: 7000,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  
  },
});
