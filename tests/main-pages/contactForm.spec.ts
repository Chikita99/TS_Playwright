import { test } from '../../fixtures/baseFixture'
import { expect } from '@playwright/test';


test.beforeEach(async ({ page, basePage }) => {
    await page.goto('/');
    await basePage.cookieScreenCTA();
})

test('Check Contact Us Form', async ({ basePage, contactPage, page }) => {
    await page.locator(basePage.contactUsBtn).click();
    await expect(page).toHaveURL('https://automationexercise.com/contact_us');
    await expect(page.locator(contactPage.mainTitle)).toHaveText("Contact Us");
    await expect(page.locator(contactPage.subTitle)).toHaveText("Get In Touch");
    await page.locator(contactPage.nameForm).fill("Test");
    await page.locator(contactPage.emailForm).fill("test@gmail.com");
    await page.locator(contactPage.subjectForm).fill("Test")
    await page.locator(contactPage.messageForm).fill("My new message.");
    const fileInput = page.locator(contactPage.uploadFileBtn);
    await fileInput.setInputFiles('download/invoice.txt');
    page.on('dialog', async (dialog) => {
        console.log(dialog.message()); 
        await dialog.accept(); 
    });
    await page.locator(contactPage.submitBtn).click();
    await expect(page.locator(contactPage.successMessage)).toHaveText("Success! Your details have been submitted successfully.")
})