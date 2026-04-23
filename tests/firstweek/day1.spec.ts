import{test,expect} from "@playwright/test"
test("google",async({page})=>{

await page.goto("https://www.google.com/")
await page.locator("#APjFqb").fill("playwright")
await page.keyboard.press('Enter')
await expect(page).toHaveURL(/dp/)
await page.waitForTimeout(3000)
})

test("amazon",async({page})=>{

await page.goto("https://www.amazon.in/")
await page.getByPlaceholder("Search Amazon.in").fill("oneplus nord 6")
await page.keyboard.press('Enter')
await page.waitForTimeout(20000)
  await page.locator('.s-main-slot div[data-component-type="s-search-result"]').first().click();

})

test("youtube",async({page})=>{

await page.goto("https://www.youtube.com/?gl=IN")
await page.getByRole('combobox',{name:'Search'}).fill("playwright")
await page.keyboard.press('Enter')
await page.waitForTimeout(5000)
await expect(page).toHaveURL(/search/)
await expect(page.getByRole('link', {name: 'YouTube Home'})).toBeVisible()
await expect(page.getByRole('link', {name: 'YouTube Home'})).toHaveText('YouTube')
await page.waitForTimeout(6000)

})