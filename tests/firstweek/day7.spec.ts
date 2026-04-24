import { test, expect } from '@playwright/test'

test.describe("day7", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.amazon.in/")
        await page.waitForLoadState('load')
    })

    test.afterEach(async ({ page }, testInfo) => {
        await page.screenshot({
            path: `screenshots/${testInfo.title}.png`
        })
        console.log("Screenshot taken")
    })

    test.afterAll(async () => {
        console.log("All tests completed")
    })

    test('laptop', async ({ page }) => {
        await page.getByRole("searchbox").fill("laptop")
        await page.keyboard.press('Enter')

        await expect(
            page.locator('div[data-component-type="s-search-result"]').first()
        ).toBeVisible()
    })

    test('smartphone', async ({ page }) => {
        await page.getByRole("searchbox").fill("smartphone")
        await page.keyboard.press('Enter')

        await expect(
            page.locator('div[data-component-type="s-search-result"]').first()
        ).toBeVisible()
    })

})