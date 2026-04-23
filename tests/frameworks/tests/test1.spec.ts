import { test } from "../fixtures/basetest"
import { Amazonpage } from "../pages/amazonpage"
import testData from '../test-data/products.json'
test.describe("datadriventesting",()=>{
testData.forEach((data) => {

   test(`searching from product ${data.product} and the brand ${data.brand} @regression`, async ({ amazonpage}) => {
      await amazonpage.searchproduct(data.product)
      await amazonpage.verifypageloaded()
      await amazonpage.selectallproduct(data.brand);
   });
})
const data1=testData[0]
   test('sample @smoke',async({amazonpage})=>{

      await amazonpage.searchproduct(data1.product)
      await amazonpage.verifypageloaded()
      await amazonpage.selectallproduct(data1.brand);
   })
});







// test("open page", async ({ page }) => {

//    let amazon = new Amazonpage(page)
//    await page.goto("https://www.amazon.in/")
//    await amazon.searchproduct('HP omnibook')
//    await amazon.verifypageloaded()
//    await amazon.selectallproduct('HP OmniBook 5 OLED')
//    await page.waitForTimeout(10000)
// })