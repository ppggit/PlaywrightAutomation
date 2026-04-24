class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardHeader = page.locator('h1:has-text("Dashboard")');
    this.settingsLink = page.locator('a[href="/settings"]');
  }

  async goto() {
    await this.page.goto('https://example.com/dashboard');
  }

  async openSettings() {
    await this.settingsLink.click();
  }

  async isVisible() {
    return this.dashboardHeader.isVisible();
  }
}

module.exports = DashboardPage;
