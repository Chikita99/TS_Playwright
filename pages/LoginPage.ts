import { Page } from '@playwright/test';

export class LoginPage {
    
    constructor (public page: Page) {};

    readonly newUserTitle = ".signup-form h2";
    readonly nameSignUpForm = "input[data-qa='signup-name']";
    readonly emailSignUpForm = "input[data-qa='signup-email']";
    readonly signUpBtn = "button[data-qa='signup-button']";
    readonly genderRadioBtn = "div.radio-inline:nth-of-type(1)";
    readonly nameForm = "#name";
    readonly emailForm = "#email";
    readonly passwordForm = "#password";
    readonly newsletterCheckbox = "#newsletter";
    readonly offersCheckbox = "#optin";
    readonly firstNameForm = "#first_name";
    readonly lastNameForm = "#last_name";
    readonly companyForm = "#company";
    readonly address1Form = "#address1";
    readonly countryDropdown = "select[data-qa='country']";
    readonly stateForm = "#state";
    readonly cityForm = "#city";
    readonly zipForm = "#zipcode";
    readonly phoneNumberForm = "#mobile_number";
    readonly createAccountBtn = "button[data-qa='create-account']";
    readonly emailSignInForm = "input[data-qa='login-email']";
    readonly passwordSignInForm = "input[data-qa='login-password']";
    readonly loginBtn = "button[data-qa='login-button']";
    readonly errorLoginMessage = ".login-form p";
    

    async isValidDate(day: number, month: number, year: number): Promise<boolean> {
        const date = new Date(year, month - 1, day);
        // Check if the date is valid
        return date.getDate() === day && date.getMonth() === (month - 1) && date.getFullYear() === year;
    }

    async dateOfBirth(day: number, month: number, year: number) {
        if (year >= 2024) {
            throw new Error("value is bigger then current year");
        };
        if (await this.isValidDate(day, month, year)) {
            await this.page.locator('select[data-qa="days"]').selectOption(day.toString());
            await this.page.locator('select[data-qa="months"]').selectOption(month.toString());
            await this.page.locator('select[data-qa="years"]').selectOption(year.toString());
        } else {
            throw new Error("invalid date for dateOfBirth function");
        }
    }

    async chooseCountry() {
        await this.page.locator(this.countryDropdown).selectOption("United States");
    }
}