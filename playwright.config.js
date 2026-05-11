const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './e2e',
  use: {
    baseURL: 'file://' + process.cwd() + '/index.html',
  },
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
});
