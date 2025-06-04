const { test, expect } = require('@playwright/test');
const path = require('path');

const fileUrl = 'file://' + path.resolve(__dirname, '..', 'deadlands-character-sheet.html');

test('Add Skill button adds a skill row', async ({ page }) => {
  await page.goto(fileUrl);
  const initialCount = await page.locator('.skill-row').count();
  await page.click('#add-skill-btn');
  const finalCount = await page.locator('.skill-row').count();
  expect(finalCount).toBe(initialCount + 1);
});
