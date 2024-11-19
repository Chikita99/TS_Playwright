//import { token, userBot } from '../fixtures/apiFixture'
import { Page } from '@playwright/test';


export class apiClient {

    constructor (public page: Page) {}

    static async  getAllProductsList(page: Page) {
        const response = await page.request.get(
            'https://automationexercise.com/api/productsList', {
            headers: {
                'Accept': 'application/json'
            }}
        )
        const data = await response.json();

        if (data.responseCode !== 200) {
            throw new Error('Incorrect response code: ' + data.responseCode)
        }

        return data
    }
}