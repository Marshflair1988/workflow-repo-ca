// @ts-check
import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 45000,
  retries: 2,
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:5500',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
  use: {
    baseURL: 'http://localhost:5500',
    actionTimeout: 30000,
    navigationTimeout: 30000,
  },
});
