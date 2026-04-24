import {test,expect} from '@playwright/test'

test.describe("DAY6",()=>{
test.beforeEach(async({page})=>{
 await page.goto('https://www.amazon.in/')
 await page.waitForLoadState('load')
})
test.afterEach(async({page},testInfo)=>{
  console.log('after closing')
 await page.screenshot({path:`${testInfo.title}.png`})

})
test('product laptop',async({page})=>{
await page.getByRole("searchbox").fill("laptop")
await page.keyboard.press('Enter')
await page.waitForTimeout(10000)
})
test('product smartphone',async({page})=>{
await page.getByRole("searchbox").fill("smartphone")
await page.keyboard.press('Enter')
await page.waitForLoadState('domcontentloaded')
})

})