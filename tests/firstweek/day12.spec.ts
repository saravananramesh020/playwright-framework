import{test,expect} from '@playwright/test'

test.beforeEach(async({page})=>{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
})
test.afterEach(async({page},testInfo)=>{
    await page.screenshot({path:`${testInfo.title}.png`})

})
test("dropdown handling",async({page})=>{
await page.getByRole('combobox').selectOption('Option1')
await page.waitForTimeout(2000)
await expect(page.getByRole('combobox')).toHaveValue('option1')
await page.locator('#dropdown-class-example').selectOption('option1');
})

test('checkbox',async({page})=>{
await page.locator('#checkBoxOption1').check()
await page.waitForTimeout(2000)
await expect(page.locator('#checkBoxOption1')).toBeChecked()
})

test('radiobox',async({page})=>{
 await page.locator('label').filter({ hasText: 'Radio1' }).getByRole('radio').check();
await page.waitForTimeout(2000)
await expect(page.locator('label').filter({ hasText: 'Radio1' }).getByRole('radio')).toBeChecked()
})



test('alert',async({page})=>{
await page.locator('#name').fill('saravanan')
page.on('dialog',async dialog =>{
     console.log(dialog.message())
     await dialog.accept()
})
await page.locator('#alertbtn').click()
await page.waitForTimeout(2000)
})

test('iframe',async({page})=>{

const iframe= page.locator('#courses-iframe')
await iframe.hover()
await iframe.contentFrame().getByRole('link', { name: '30% OFF on Silver and' }).click();
})

