// playwright.config.js
import { defineConfig } from '@playwright/test';
require('dotenv').config();

export default defineConfig({
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:5500',
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:5500',
  },
});
