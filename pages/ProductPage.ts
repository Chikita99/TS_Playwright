import { Page } from '@playwright/test';

export class ProductPage {
    constructor (public page: Page) {};

    readonly mainTitle = ".title.text-center";
    readonly searchForm = "input[id='search_product']";
    readonly searchBtn = "button[id='submit_search']";
    readonly productName = ".productinfo.text-center p";
    readonly productPrice = ".productinfo.text-center h2";
    
}