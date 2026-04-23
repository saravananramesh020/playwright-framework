import {test as Base} from "@playwright/test"
import { Amazonpage } from "../pages/amazonpage"

type myfixture ={

    amazonpage:Amazonpage
}
export const test = Base.extend<myfixture>({
amazonpage : async ({page},use)=>{
    const amazon = new Amazonpage(page)
    await page.goto('https://www.amazon.in/')
    await use(amazon)
}
})