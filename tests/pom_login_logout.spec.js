import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { UserIndexPage } from '../pages/UserIndexPage';

let context;
let page;

test.beforeAll(async({browser}) => {
    context = await browser.newContext();
    await context.tracing.start({
        snapshots: true,
        screenshots: true
    });
    page = await context.newPage();
})

test.afterAll(async() => {
    await context.tracing.stop({
        path: 'test_trace.zip'
    });
})

test('Login logout test', async () => {
    await page.goto("http://zero.webappsecurity.com/");

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const userIndexPage = new UserIndexPage(page);

    await homePage.click_sign_in_button();
    await loginPage.input_username("username");
    await loginPage.input_password("password");
    await loginPage.click_submit_button();

    await page.goBack();

    await expect(await userIndexPage.username_drop_down).toHaveText('username');
    await userIndexPage.logout();

    await expect(homePage.sign_in_button).toBeVisible();
})
