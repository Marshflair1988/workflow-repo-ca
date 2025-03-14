import { test, expect } from '@playwright/test';

test.describe('Navigation functionality', () => {
  test('can navigate from home to venue details', async ({ page }) => {
    // Start at home page
    await page.goto('/');

    // Wait for venue list to load and not show loading text
    await page.waitForSelector('#venue-container');
    await expect(page.locator('#venue-container')).not.toContainText(
      'Loading...',
    );

    // Click the first venue link
    await page.locator('#venue-container a').first().click();

    // Wait for venue page to load and verify heading
    await page.waitForURL('**/venue/**');
    await expect(page.locator('h1')).not.toContainText('Loading venue...');
    await expect(page.locator('h1')).toHaveText(/Venue details/);
  });
});
