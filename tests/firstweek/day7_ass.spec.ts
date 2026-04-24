import { test, expect } from '@playwright/test'

test.describe('assertions', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.amazon.in/')
        await page.waitForLoadState('load')
    })

    test.afterEach(async ({ page }) => {
        await page.goBack()
    })

    test('verify url and Title', async ({ page }) => {
        await expect(page).toHaveURL('https://www.amazon.in/')
        await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
    })

    test('verify search box and visible', async ({ page }) => {
        const searchbox = await page.getByRole('searchbox')
        await expect(searchbox).toBeVisible()
        await expect(searchbox).toBeEnabled()
    })

    test("Verify Search Input Value", async ({ page }) => {
        const searchBox = page.getByRole("searchbox")
        await searchBox.fill("mobile")
        await expect(searchBox).toHaveValue("mobile")
    })
})
test.describe('assertions cases', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.amazon.in/')
        await page.waitForLoadState('load')
    })

    test.afterEach(async ({ page }) => {
        await page.goBack()
    })

    test('TC3', async ({ page }) => {
       const searchBox = page.getByRole("searchbox")
        await searchBox.fill("Keyboard")
        await expect(searchBox).toHaveValue("Keyboard")
        await page.keyboard.press('Enter')
        await expect(page).toHaveURL(/search/)
    })

    test('TC2', async ({ page }) => {
        const searchbox = await page.getByRole('searchbox')
        await searchbox.fill('headphones')
        await page.keyboard.press('Enter')
        await page.waitForLoadState('domcontentloaded')
        await expect(page.locator('div[data-component-type="s-search-result"]').first()).toBeVisible()
    })

    test("TC1", async ({ page }) => {
        const searchBox = page.getByRole("searchbox")
        await searchBox.fill("mobile")
        await expect(searchBox).toHaveValue("mobile")
        await page.keyboard.press('Enter')
        await expect(page).toHaveURL(/search/)
    })
})