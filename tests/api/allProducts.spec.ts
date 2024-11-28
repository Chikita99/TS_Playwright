import { test } from '../../fixtures/baseFixture'
import { product } from '../../fixtures/apiFixtures'
import { expect } from '@playwright/test';
import { apiClient } from '../../helpers/apiClient';


test('Get all products list ', async ({ page }) => {
    const allProductsListResponse = await apiClient.getAllProductsList(page);
    expect(allProductsListResponse.products[0]).toEqual(product);
})