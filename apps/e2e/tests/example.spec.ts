import { test, expect } from '@playwright/test';

const url = process.env.TEST_ENV_DOMAIN || 'http://localhost:3060'

test('main route has text', async ({ page }) => {
  await page.goto(`${url}/`);

  // Expect a title "to contain" a substring.
  await expect(page.getByText(/web/i)).toBeVisible()
});

test('sub route has text', async ({ page }) => {
  await page.goto(`${url}/sub`);

  await expect(page.getByRole('heading', { name: /Welcome to Astro/i })).toBeVisible()
});
