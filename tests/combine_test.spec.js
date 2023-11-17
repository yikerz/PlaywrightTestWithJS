import { chromium, expect, test } from '@playwright/test';

test.describe('All together', () => {

    let browser;
    let context;
    let page;

    test.beforeAll(async() => {
        browser = await chromium.launch({
            slowMo: 500,
            headless: false
        });
        context = await browser.newContext({
            recordVideo: {
                dir: 'videos/',
                size: {width: 800, height: 600}
            }
        });
        page = await context.newPage();
    })

    test.afterAll(async() => {
        await browser.close();
    })

    test('Form submission test @combineTest', async () => {
        await page.goto("https://formy-project.herokuapp.com/form");
        await page.getByPlaceholder('Enter first name').fill("Travis");
        await page.getByPlaceholder('Enter last name').fill("Mong");
        await page.getByPlaceholder('Enter your job title').fill("Developer");

        await page.locator('id=radio-button-3').click();
        await page.locator('id=checkbox-1').click();

        await page.locator('id=select-menu').selectOption('1');

        await page.locator('id=datepicker').fill('05/28/2022');
        await page.keyboard.press('Enter');

        await page.locator('.btn.btn-lg.btn-primary').click();

        const heading = await page.locator('h1[align="center"]');
        await heading.isVisible();
        await expect(heading).toHaveText('Thanks for submitting your form');
    })
    
})