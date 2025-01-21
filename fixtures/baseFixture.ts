import { test as base } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { LoginPage } from '../pages/LoginPage';
import { ContactPage } from '../pages/ContactPage';
import { ProductPage } from '../pages/ProductPage';

type Fixture = {
    basePage: BasePage;
    loginPage: LoginPage;
    contactPage: ContactPage;
    productPage: ProductPage;
};

export const test = base.extend<Fixture>({
    basePage: async ({ page }, use) => {
        const basePage = new BasePage(page);
        await use(basePage);
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    contactPage: async ({ page }, use) => {
        const contactPage = new ContactPage(page);
        await use(contactPage);
    },
    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    }
});

export const expect = base.expect