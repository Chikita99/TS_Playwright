import { Locator, Page } from '@playwright/test';

export class BasePage {

    constructor (public page: Page) {}

    private readonly cookieCTA = ".fc-cta-consent";
    readonly menuLoginBtn = ".fa.fa-lock";
    readonly logInUsernameText = "//ul[@class='nav navbar-nav']//li//a[contains(text(), 'Logged in as')]";
    readonly deleteAccountBtn = ".fa.fa-trash-o";

    //account_created/delete page
    readonly accountCreatedTitle = ".title.text-center";
    readonly continueBtn = "a[data-qa='continue-button']";

    

    

    async cookieScreenCTA() {
        await this.page.locator(this.cookieCTA).click();
    }

    getTitleByText(titleText: string): Locator {
        return this.page.locator(`h2.title.text-center:has-text("${titleText}")`);
    }
}