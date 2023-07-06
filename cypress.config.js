const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) { },
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'mochawesome-report',
      reportFilename: 'index.html',
      overwrite: false,
      html: true,
      json: false
    }
  }
})
