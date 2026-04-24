class SecureAreaPage {
  constructor(page) {
    this.page = page;
    this.dashboardHeader = page.locator('h2', { hasText: 'Secure Area' });
    this.logoutButton = page.locator('a.button.secondary.radius');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/secure');
  }

  async logout() {
    await this.logoutButton.click();
  }

  async isVisible() {
    return this.dashboardHeader.isVisible();
  }
}

module.exports = SecureAreaPage;
