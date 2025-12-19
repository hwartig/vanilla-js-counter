import { defineConfig } from 'checkly'

const config = defineConfig({
  projectName: 'Vanilla Js Counter',
  logicalId: 'vanilla-js-counter',
  repoUrl: 'https://github.com/hwartig/vanilla-js-counter',
  checks: {
    playwrightConfigPath: './playwright.config.ts',
    playwrightChecks: [
      { name: 'Playwright Tests', logicalId: 'playwright-tests' }
    ],
  },
})

export default config
