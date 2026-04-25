import { Page, expect } from '@playwright/test'
export class Amazonpage {
    page: Page
    constructor(page: Page) {
        this.page = page
    }
    async searchproduct(product: string) {
        await this.page.getByPlaceholder('Search Amazon.in').fill(product)
        await this.page.keyboard.press('Enter')
    }
    async selectallproduct(modelname: string) {
        await this.page.getByRole('link', { name: modelname })
            .click()
    }
    async verifypageloaded() {
        await expect(this.page.locator('div[data-component-type="s-search-result"]').first()).toBeVisible();
    }
}