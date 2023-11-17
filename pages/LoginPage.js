exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.username_field = page.locator('id=user_login');
        this.password_field = page.locator('id=user_password');
        this.sign_in_button = page.locator('input[name=submit]');
    }

    async input_username(username) {
        await this.username_field.fill(username);
    }

    async input_password(password) {
        await this.password_field.fill(password);
    }

    async click_submit_button() {
        await this.sign_in_button.click();
    }

}