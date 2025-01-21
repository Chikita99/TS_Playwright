import { Locator, Page } from '@playwright/test';

export class BasePage {

    constructor (public page: Page) {}

    private readonly cookieCTA = ".fc-cta-consent";
    readonly menuLoginBtn = ".fa.fa-lock";
    readonly contactUsBtn = ".fa.fa-envelope";
    readonly productsBtn = ".material-icons.card_travel";
    readonly logInUsernameText = "//ul[@class='nav navbar-nav']//li//a[contains(text(), 'Logged in as')]";
    readonly deleteAccountBtn = ".fa.fa-trash-o";
    private readonly addToCartBtn = "a[data-product-id='1']";
    private readonly viewCartBtn = "a[href='/view_cart']";
    readonly carouselH1Title = ".item.active .col-sm-6 h1";
    readonly carouselH2Title = ".item.active .col-sm-6 h2";
    readonly carouselMainText = ".item.active .col-sm-6 p";
    readonly carouselTestcaseBtn = ".item.active .col-sm-6 .test_cases_list .btn.btn-success";
    readonly carouselApiListBtn = ".item.active .col-sm-6 .apis_list .btn.btn-success";
    readonly carouselRightArrowBtn = ".right.control-carousel.hidden-xs";

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

    //payment_done_page
    readonly mainText = ".col-sm-9.col-sm-offset-1 p";

    async cookieScreenCTA() {
        const cookieButton = this.page.locator(this.cookieCTA);
        const isVisible = await cookieButton.isVisible();
    
        if (isVisible) {
            await cookieButton.click();
            console.log("Cookie button clicked.");
        } else {
            console.log("Cookie button is not visible, skipping.");
        }
    }

    getTitleByText(titleText: string): Locator {
        return this.page.locator(`h2.title.text-center:has-text("${titleText}")`);
    };
    
}