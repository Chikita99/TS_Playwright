import { Page } from '@playwright/test';

export class ContactPage {
    constructor (public page: Page) {};

    readonly mainTitle = ".col-sm-12 h2";
    readonly subTitle = ".col-sm-8 h2";
    readonly nameForm = "input[data-qa='name']";
    readonly emailForm = "input[data-qa='email']";
    readonly subjectForm = "input[data-qa='subject']";
    readonly messageForm = "textarea[data-qa='message']";
    readonly uploadFileBtn = "//input[@name='upload_file']";
    readonly submitBtn = "input[data-qa='submit-button']";
    readonly successMessage = ".status.alert.alert-success";
}