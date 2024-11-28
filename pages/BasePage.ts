import { Locator, Page } from '@playwright/test';

export class BasePage {

    constructor (public page: Page) {}

    private readonly cookieCTA = ".fc-cta-consent";
    readonly menuLoginBtn = ".fa.fa-lock";
    readonly logInUsernameText = "//ul[@class='nav navbar-nav']//li//a[contains(text(), 'Logged in as')]";
    readonly deleteAccountBtn = ".fa.fa-trash-o";
    private readonly addToCartBtn = "a[data-product-id='1']";
    private readonly viewCartBtn = "a[href='/view_cart']";

    //cart_page
    readonly proceedCheckoutBtn = ".btn.btn-default.check_out";
    readonly firstAddToCartBtn = this.page.locator(this.addToCartBtn).first();
    readonly modalViewCartBtn = this.page.locator(this.viewCartBtn).nth(1);

    //account_created/delete page
    readonly accountCreatedTitle = ".title.text-center";
    readonly continueBtn = "a[data-qa='continue-button']";

    //payment_page
    readonly cardNameForm = "input[data-qa='name-on-card']";
    readonly cardNumberForm = "input[data-qa='card-number']";
    readonly cardCVCForm = "input[data-qa='cvc']";
    readonly cardMonthForm = "input[data-qa='expiry-month']";
    readonly cardYearForm = "input[data-qa='expiry-year']";
    readonly payAndConfBtn = "button[data-qa='pay-button']";

    //payment_done
    readonly mainText = ".col-sm-9.col-sm-offset-1 p";

    async cookieScreenCTA() {
        await this.page.locator(this.cookieCTA).click();
    }

    getTitleByText(titleText: string): Locator {
        return this.page.locator(`h2.title.text-center:has-text("${titleText}")`);
    }
}