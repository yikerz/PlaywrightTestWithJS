exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        this.sign_in_button = page.locator('id=signin_button');
        this.zero_bank_link = page.getByRole('link', { name: 'Zero Bank' });
    }

    async click_sign_in_button() {
        if (await this.sign_in_button.isVisible()) {
            await this.sign_in_button.click();
        }
    }

}