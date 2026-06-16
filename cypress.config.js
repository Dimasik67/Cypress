const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "http://localhost:3000/",    
    retries: 2,
    viewport1: {
      viewportHeight: 360,
      viewportWidth: 800,
    },
    viewport2: {
      viewportHeight: 1920,
      viewportWidth: 1080,
    },
    setupNodeEvents(on, config) {
    },
  },
});
