import { test } from '../../fixtures/baseFixture'
import { expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';


test.beforeEach(async ({ page, basePage }) => {
    await page.goto("/login")
    await basePage.cookieScreenCTA();
})

test('Download Invoice after purchase order', async ({ basePage, loginPage, page }) => {
    const downloadFolder = path.resolve('download');
    const downloadedFileName = 'invoice.txt';
    const expectedText = "Hi Test Test, Your total purchase amount is 500. Thank you";

    if (!fs.existsSync(downloadFolder)) {
        fs.mkdirSync(downloadFolder);
    }

    await page.locator(loginPage.emailSignInForm).fill("test_n29@gmail.com");
    await page.locator(loginPage.passwordSignInForm).fill("Password1@");
    await page.locator(loginPage.loginBtn).click();
    await expect(page.locator(basePage.logInUsernameText)).toHaveText("Logged in as Test");
    await basePage.firstAddToCartBtn.click();
    await basePage.modalViewCartBtn.click();
    await page.locator(basePage.proceedCheckoutBtn).click();
    await page.locator(basePage.proceedCheckoutBtn).click();
    await page.locator(basePage.cardNameForm).fill("Test");
    await page.locator(basePage.cardNumberForm).fill("4242424242424242");
    await page.locator(basePage.cardCVCForm).fill("123");
    await page.locator(basePage.cardMonthForm).fill("11");
    await page.locator(basePage.cardYearForm).fill("2026");
    await page.locator(basePage.payAndConfBtn).click();
    await expect(page.locator(basePage.mainText)).toHaveText("Congratulations! Your order has been confirmed!");
    const downloadPromise = page.waitForEvent('download');
    await page.locator(basePage.proceedCheckoutBtn).click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe(downloadedFileName);
    const filePath = path.join(downloadFolder, downloadedFileName);
    await download.saveAs(filePath);
    expect(download.url()).toBe("https://automationexercise.com/download_invoice/500");
    expect(fs.existsSync(filePath)).toBeTruthy();

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    expect(fileContent).toContain(expectedText);

    if (fs.existsSync(downloadedFileName)) {
        fs.unlinkSync(downloadedFileName); 
    }
});

