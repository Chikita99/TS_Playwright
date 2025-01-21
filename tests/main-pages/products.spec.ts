import { test } from '../../fixtures/baseFixture'
import { expect } from '@playwright/test';



test.beforeEach(async ({ page, basePage }) => {
    await page.goto('/');
    await basePage.cookieScreenCTA();
})

test('Search check on Product Page', async ({ page, basePage, productPage }) => {
    await page.locator(basePage.productsBtn).click();
    await expect(page).toHaveURL("https://automationexercise.com/products");
    await expect(page.locator(productPage.mainTitle)).toHaveText("All Products");
    await page.locator(productPage.searchForm).fill("Men Tshirt");
    await page.locator(productPage.searchBtn).click();
    await expect(page.locator(productPage.productName)).toHaveText("Men Tshirt");
    await expect(page.locator(productPage.productPrice)).toHaveText("Rs. 400");
})