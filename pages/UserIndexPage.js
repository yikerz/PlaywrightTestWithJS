exports.UserIndexPage = class UserIndexPage {

    constructor(page) {
        this.page = page;
        this.username_drop_down = page.locator('xpath=//*[@id="settingsBox"]/ul/li[3]/a');
        this.logout_link = page.getByRole('link', { name: 'Logout' });
    }

    async logout() {
        this.username_drop_down.click()

        if (await this.logout_link.isEnabled()) {
            await this.logout_link.click();
        }
    }


}