class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator('input[name="username"]');
    this.passwordField = page.locator('input[name="password"]');
    this.signInButton = page.locator('button[type="submit"]');
  }

  async goto() {
    await this.page.goto('https://example.com/login');
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.signInButton.click();
  }

  async isLoggedIn() {
    return this.page.locator('text=Logout').isVisible();
  }
}

module.exports = LoginPage;
