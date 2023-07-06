const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) { },
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results/',
      overwrite: false,
      reportFilename: 'index.html',
      html: false,
      json: true
    }
  }
})
