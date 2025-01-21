import { test } from '../../fixtures/baseFixture'
import { expect } from '@playwright/test';


test.beforeEach(async ({ page, basePage }) => {
    await page.goto('/');
    await basePage.cookieScreenCTA();
})

test('Register and delete new user', async ({ basePage, loginPage, page }) => {
    await expect(page).toHaveURL('https://automationexercise.com/');
    await page.locator(basePage.menuLoginBtn).click();
    await expect(page.locator(loginPage.newUserTitle)).toHaveText("New User Signup!")
    await page.locator(loginPage.nameSignUpForm).fill('Test');
    await page.locator(loginPage.emailSignUpForm).fill(`test${Math.floor(Math.random() * 10000)}@gmail.com`);
    await page.locator(loginPage.signUpBtn).click();
    await expect(basePage.getTitleByText("Enter Account Information")).toBeVisible();
    await page.locator(loginPage.genderRadioBtn).click();
    await page.locator(loginPage.nameForm).fill('Test');
    const emailValue = await page.locator('input[data-qa="email"]').getAttribute('value');
    expect(emailValue).toContain('@gmail.com');
    await page.locator(loginPage.passwordForm).fill("Password1@");
    await loginPage.dateOfBirth(2, 11, 1999);
    await page.locator(loginPage.newsletterCheckbox).click();
    await page.locator(loginPage.offersCheckbox).click();
    await page.locator(loginPage.firstNameForm).fill("Nick");
    await page.locator(loginPage.lastNameForm).fill("Nab");
    await page.locator(loginPage.companyForm).fill("new Company");
    await page.locator(loginPage.address1Form).fill("USE, SA, New Forlorn str 12");
    await loginPage.chooseCountry();
    await page.locator(loginPage.stateForm).fill("New York");
    await page.locator(loginPage.cityForm).fill("New York");
    await page.locator(loginPage.zipForm).fill("94040");
    await page.locator(loginPage.phoneNumberForm).fill("60039144213");
    await page.locator(loginPage.createAccountBtn).click();
    await expect(page.locator(basePage.accountCreatedTitle)).toHaveText("Account Created!");
    await page.locator(basePage.continueBtn).click();
    await expect(page.locator(basePage.logInUsernameText)).toHaveText("Logged in as Test");
    await page.locator(basePage.deleteAccountBtn).click();
    await expect(page.locator(basePage.accountCreatedTitle)).toHaveText("Account Deleted!");
    await page.locator(basePage.continueBtn).click();
})

test('Logic User with incorrect password and email', async ({basePage, loginPage, page}) => {
    await expect(page).toHaveURL('https://automationexercise.com/');
    await page.locator(basePage.menuLoginBtn).click();
    await page.locator(loginPage.emailSignInForm).fill("test@gmail.com");
    await page.locator(loginPage.passwordSignInForm).fill("Password1@");
    await page.locator(loginPage.loginBtn).click();
    await expect(page.locator(loginPage.errorLoginMessage)).toHaveText("Your email or password is incorrect!");
})