import { test, expect } from '@playwright/test';

/**
 * Smoke tests, not a full test suite: catch "the app is visibly broken"
 * before it deploys, not every regression. See docs/plans/PLANES.md.
 */

test('loads with no console errors', async ({ page }) => {
  const errors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', (err) => errors.push(err.message));

  await page.goto('/');
  await expect(page.locator('#console')).toBeVisible();

  expect(errors, `console errors:\n${errors.join('\n')}`).toEqual([]);
});

test('core module/menu hierarchy is intact', async ({ page }) => {
  await page.goto('/');

  // The module picker is the top of the nav hierarchy — if this is gone or
  // renamed, navigation is broken for everyone.
  await expect(page.locator('#template-module-picker')).toBeVisible();
  await expect(page.locator('[data-module="self"]')).toBeVisible();
  await expect(page.locator('[data-org-nav="partido"]')).toBeVisible();
  await expect(page.locator('[data-org-nav="colectivos"]')).toBeVisible();

  // Selecting Self should reveal its nav tree.
  await page.locator('[data-module="self"]').click();
  await expect(page.locator('#self-nav-tree')).toBeVisible();

  // Selecting Party should reveal the party nav tree.
  await page.locator('[data-org-nav="partido"]').click();
  await expect(page.locator('#party-nav-tree')).toBeVisible();
});

test('map background loads', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#map-container')).toBeVisible();
  // Leaflet stamps this class on its root pane once initialized.
  await expect(page.locator('.leaflet-container')).toBeVisible({ timeout: 10_000 });
});
