const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',

    setupNodeEvents(on, config) {
      // تفعيل Allure plugin
      require('@shelex/cypress-allure-plugin/writer')(on, config);

      // إخفاء بعض الـ XHR logs غير الضرورية
      on('task', {
        log(message) {
          if (!message.includes('GET https://api.adat')) {
            console.log(message);
          }
          return null;
        },
      });

      return config;
    },
  },

  env: {
    allure: true,
    allureResultsPath: 'allure-results',
    allureReuseAfterSpec: true
  },
});