import { expect, test } from '@playwright/test';

test('Typical assertions', async ({page}) => {
    await page.goto("https://formy-project.herokuapp.com/");
    // check element presents or not
    await expect(page.getByRole('heading', {name: 'Welcome to Formy'})).toHaveCount(1);
    // check element hidden or visible
    await expect(page.locator('text=Welcome to Formy')).toBeVisible();
    await expect.soft(page.locator('text=Welcome to Formy')).toBeHidden(); // soft: failure does not stop the test
    // check element enabled or disabled
    await expect(page.locator('text=Welcome to Formy')).toBeEnabled;
    await expect.soft(page.locator('text=Welcome to Formy')).toBeDisabled;
    // check text
    await expect(page.locator('h1.display-3')).toHaveText('Welcome to Formy');
    await expect(page.locator('h1.display-3')).not.toHaveText('ABCD');
    // check attribute value
    await expect(page.locator('h1.display-3')).toHaveAttribute('class', 'display-3');
    await expect(page.locator('h1.display-3')).toHaveClass('display-3');
    // check url and title
    await expect(page).toHaveURL("https://formy-project.herokuapp.com/");
    await expect(page).toHaveTitle('Formy');


    
})