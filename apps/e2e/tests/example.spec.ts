import { test, expect } from '@playwright/test';

const url = process.env.TEST_ENV_DOMAIN || 'http://localhost:3060'

test('main route has title', async ({ page }) => {
  await page.goto(`${url}/`);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/web/i);
});

test('get started link', async ({ page }) => {
  await page.goto(`${url}/sub`);

  await expect(page).toHaveTitle(/Express/i);
});
