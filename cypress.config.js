const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: 
  {
    reporter: 'mochawesome',
reporterOptions: {
  reportDir: 'cypress/reports/mochawesome',
  overwrite: false,
  html: true,
  json: true,
},
    baseUrl: 'https://automationexercise.com',

    setupNodeEvents(on, config) {
      // implement node event listeners here
      // suppress unnecessary XHR logs
      on('task', {
        log(message) {
          if (!message.includes('GET https://api.adat')) {
            console.log(message);
          }
          return null;
        },
          });
    },
  },
});
