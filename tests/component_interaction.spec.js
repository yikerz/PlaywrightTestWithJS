import { chromium, test } from '@playwright/test';

test.describe('Interaction test', () => {
    let browser;
    let context;
    let page;

    test.beforeAll(async() => {
        browser = await chromium.launch({
            slowMo: 500,
            headless: false
        });
        context = await browser.newContext();
        page = await context.newPage();
    })


    test.afterAll(async() => {
        await browser.close();
    })

    test('Radio button test', async () => {
        await page.goto("https://formy-project.herokuapp.com/radiobutton");

        await page.click('id=radio-button-1');
        await page.click('input[value=option2]');
        await page.click('xpath=/html/body/div/div[3]/input');
    })

    test('Date picker test', async () => {
        await page.goto("https://formy-project.herokuapp.com/datepicker");

        const date_field = await page.locator("id=datepicker");
        await date_field.click();
        await date_field.fill("03/03/2024");
        await page.keyboard.press('Enter');
    })

    test('Drop down test', async () => {
        await page.goto("https://formy-project.herokuapp.com/dropdown");

        const drop_down_menu = await page.locator('id=dropdownMenuButton');
        await drop_down_menu.click();
        const autocomplete_item = await page.locator('id=autocomplete');
        await autocomplete_item.click();
    })

    test('Upload test', async () => {
        await page.goto("https://formy-project.herokuapp.com/fileupload");

        const upload_field = await page.locator('id=file-upload-field');
        await upload_field.fill("passport.jpg");
    })
    
})