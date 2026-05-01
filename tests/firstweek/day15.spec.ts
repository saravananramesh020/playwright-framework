import{test,expect} from '@playwright/test'

test('failure demo', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  await page.waitForTimeout(3000);
await expect(page.locator('h1')).toBe("text")

});