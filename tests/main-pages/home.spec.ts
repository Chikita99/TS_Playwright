import { test } from '../../fixtures/baseFixture'
import { expect } from '@playwright/test';

test.beforeEach(async ({ page, basePage }) => {
    await page.goto('/');
    await basePage.cookieScreenCTA();
})

test("Check Carousel banner", async ({page, basePage}) => {
    const text = {
        h1Title: "AutomationExercise",
        h2Title: "Full-Fledged practice website for Automation Engineers",
        mainText: "All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.",
        testCaseBtn: "Test Cases",
        apiListBtn: "APIs list for practice"

    }

    const carouselCheck = async function (carouselCards: number) {
        while(carouselCards > 0) {
        await expect(page.locator(basePage.carouselH1Title)).toHaveText(text.h1Title);
        await expect(page.locator(basePage.carouselH2Title)).toHaveText(text.h2Title);
        await expect(page.locator(basePage.carouselMainText)).toHaveText(text.mainText);
        await expect(page.locator(basePage.carouselTestcaseBtn)).toHaveText(text.testCaseBtn);
        await expect(page.locator(basePage.carouselApiListBtn)).toHaveText(text.apiListBtn);

        await page.locator(basePage.carouselRightArrowBtn).click();
        await page.waitForTimeout(1000);

        carouselCards--;
        }
    }

    await carouselCheck(3);

})