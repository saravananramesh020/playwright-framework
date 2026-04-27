import{test,expect} from '@playwright/test'
test('multiple windows',async({page,context})=>{

await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
const [newpage] = await Promise.all([
context.waitForEvent('page'),
page.locator('#openwindow').click()
])
await page.waitForLoadState()
console.log(await newpage.title())
await page.waitForTimeout(20000)
})
test('upload',async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator('#file-upload').setInputFiles('C:/Users/sarav/Music/playwright interview/tests/firstweek/checkbox.png')
    await page.locator('#file-submit').click()
    await page.waitForLoadState()
    await expect(page.locator('h3')).toHaveText('File Uploaded!')
})

test('download',async({page})=>{

await page.goto('https://the-internet.herokuapp.com/download')
const downloadpromise = page.waitForEvent('download')
await page.locator('text=some-file.txt').click()
const download = await downloadpromise
const filename= download.suggestedFilename()
console.log(filename)
await download.saveAs(`downloads/${filename}`)
})


test('hard assertion', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    await expect(
        page.locator('h1')
    ).toHaveText('Practice Page')
    console.log('This line runs only if assertion passes')

await expect.soft(page.locator('h1')).toHaveText('practice page')
console.log ('page failed')
})
test('context',async({browser})=>{
const context1= await browser.newContext()
const page1=await context1.newPage()

await page1.goto('https://rahulshettyacademy.com')
console.log(await page1.title())

const context2= await browser.newContext()
const page2 = await context2.newPage()
await page2.goto('https://rahulshettyacademy.com/AutomationPractice/')
console.log(await page2.title())
})

test('switch',async({browser})=>{

const context1 =await  browser.newContext()
const page1 = await context1.newPage()

await page1.goto("https://rahulshettyacademy.com/AutomationPractice/")
const [newtab] =await Promise.all([
     context1.waitForEvent('page'),
     page1.locator('#opentab').click(),
     page1.waitForTimeout(20000)
])
await newtab.waitForLoadState()
console.log(await newtab.title())
console.log(await page1.title())
})