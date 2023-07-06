const { defineConfig } = require('cypress')


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) { },
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/mochawesome-report',
      overwrite: false,
      html: false,
      json: true
    }
  }
})
