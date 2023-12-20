import { test, expect } from '@playwright/test';

/* Welcome to testing! Will be broken up into unit and integration tests. */

test('Loaded Ivy Exchange!', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page.locator('html')).toBeVisible();
});