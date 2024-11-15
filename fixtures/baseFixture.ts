import { test as base } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { LoginPage } from '../pages/loginPage';

type Fixture = {
    basePage: BasePage;
    loginPage: LoginPage
};

export const test = base.extend<Fixture>({
    basePage: async ({ page }, use) => {
        const basePage = new BasePage(page);
        await use(basePage);
    },

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage)
    }
});

export const expect = base.expect