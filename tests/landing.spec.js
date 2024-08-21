// @ts-check
const { test, expect } = require('@playwright/test');

const siteUrl = 'https://getfinancialliberation.com/';

async function verifyLink(page, linkText) {
  await expect(page.locator('iframe')).toBeVisible();
  const linksFrame = page.frameLocator('iframe');
  if (linksFrame === null) throw new Error("No frame");
  const linkLocator = linksFrame.getByText(linkText);
  await expect(linkLocator).toBeVisible();
  const pagePromise = page.context().waitForEvent('page');
  await linkLocator.click();
  return await pagePromise;
}

test('substack main link works', async ({ page }) => {
  await page.goto(siteUrl);
  const newPage = await verifyLink(page, 'Kaldun Prosperity and Liberation')
  await expect(newPage).toHaveURL('https://taraskaldun.substack.com/');
});

test('substack terms of use link works', async ({ page }) => {
  await page.goto(siteUrl);
  const newPage = await verifyLink(page, "Substack's Terms of Use");
  await expect(newPage).toHaveURL('https://substack.com/tos');
});

test('substack privacy policy link works', async ({ page }) => {
  await page.goto(siteUrl);
  const newPage = await verifyLink(page, "Privacy Policy");
  await expect(newPage).toHaveURL('https://substack.com/privacy');
});

test('substack information collection link works', async ({ page }) => {
  await page.goto(siteUrl);
  const newPage = await verifyLink(page, "Information collection notice");
  await expect(newPage).toHaveURL('https://substack.com/ccpa?utm_source=embed_publication#personal-data-collected');
});
