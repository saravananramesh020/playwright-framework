import { test, expect } from '@playwright/test'

test('go', async ({ page }) => {
    await page.goto("https://www.google.com/")

    await page.getByRole('combobox').fill("amazon")
    await page.keyboard.press('Enter')
    await page.waitForTimeout(20000)
    await page.waitForLoadState('domcontentloaded')
    await page.locator('div[data-component-type="s-search-result"]').first().click()
})