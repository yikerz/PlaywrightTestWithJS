import { expect, test } from '@playwright/test';

test('Test different locators', async({page}) => {
    await page.goto("https://formy-project.herokuapp.com/");

    // using locator
    const logo1 = await page.locator('id=logo');
    const logo2 = await page.locator('[id=logo]');
    // using xpath
    const logo3 = await page.locator('xpath=//*[@id="logo"]');
    const logo4 = await page.locator('//*[@id="logo"]');
    // using CSS selector
    const logo5 = await page.locator('a#logo');
    const item_list = await page.locator('li.nav-item');
    // using any attribute
    const logo7 = await page.locator('[class=navbar-brand]')
    // using getBy
    const logo8 = await page.getByRole('link', { name: "Formy" })

    // assertions
    await expect(logo1).toHaveText("Formy");
    await expect(logo2).toHaveText("Formy");
    await expect(logo3).toHaveText("Formy");
    await expect(logo4).toHaveText("Formy");
    await expect(logo5).toHaveText("Formy");
    await expect(logo7).toHaveText("Formy");
    await expect(logo8).toHaveText("Formy");
    await expect(item_list).toHaveCount(2);

})
