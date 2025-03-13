import { test, expect } from '@playwright/test';

test.describe('Login functionality', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the login page before each test
    await page.goto('/login/');
    // Wait for the form to be ready
    await page.waitForSelector('#loginForm');
  });

  test('successful login with valid credentials', async ({ page }) => {
    // Get credentials from environment variables
    const email = process.env.TEST_USER_EMAIL;
    const password = process.env.TEST_USER_PASSWORD;

    // Fill in the login form
    await page.getByPlaceholder('Email').fill(email);
    await page.getByPlaceholder('Password').fill(password);

    // Click login and wait for navigation
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('**/');

    // Verify successful login
    await expect(page.getByText('Welcome')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
  });

  test('shows error with invalid credentials', async ({ page }) => {
    // Fill in the form with invalid credentials but valid domain
    await page.getByPlaceholder('Email').fill('wrong@stud.noroff.no');
    await page.getByPlaceholder('Password').fill('wrongpassword');

    // Click the login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Wait for and verify error message is shown in the message-container
    await expect(page.locator('#message-container')).toBeVisible();
    await expect(page.locator('#message-container')).toContainText(
      'Invalid email or password',
    );
  });
});
