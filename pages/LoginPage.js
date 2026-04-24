class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator('#username');
    this.passwordField = page.locator('#password');
    this.signInButton = page.locator('button[type="submit"]');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.signInButton.click();
  }

  async isLoggedIn() {
    return this.page.locator('h2', { hasText: 'Secure Area' }).isVisible();
  }
}

module.exports = LoginPage;
