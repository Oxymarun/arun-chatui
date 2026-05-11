const { test, expect } = require('@playwright/test');
const path = require('path');

const FILE_URL = 'file://' + path.resolve(__dirname, '../index.html');

test('page loads with correct title', async ({ page }) => {
  await page.goto(FILE_URL);
  await expect(page).toHaveTitle(/Arun Sharma/);
});

test('dark mode is active by default', async ({ page }) => {
  await page.goto(FILE_URL);
  const theme = await page.evaluate(() => document.documentElement.dataset.theme);
  expect(theme).toBe('dark');
});

test('header name is visible', async ({ page }) => {
  await page.goto(FILE_URL);
  await expect(page.locator('.header-name')).toBeVisible();
});

test('topic buttons exist', async ({ page }) => {
  await page.goto(FILE_URL);
  const topicBtns = page.locator('.topic-btn');
  await expect(topicBtns).toHaveCount(6);
});

test('aurora blobs are in the DOM', async ({ page }) => {
  await page.goto(FILE_URL);
  await expect(page.locator('#ab1')).toBeAttached();
  await expect(page.locator('#ab2')).toBeAttached();
  await expect(page.locator('#ab3')).toBeAttached();
});
