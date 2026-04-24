class ProfilePage {
  constructor(page) {
    this.page = page;
    this.profileHeader = page.locator('h1:has-text("Profile")');
    this.editButton = page.locator('button:has-text("Edit Profile")');
    this.nameField = page.locator('input[name="name"]');
  }

  async goto() {
    await this.page.goto('https://example.com/profile');
  }

  async updateName(name) {
    await this.editButton.click();
    await this.nameField.fill(name);
    await this.page.locator('button:has-text("Save")').click();
  }

  async isLoaded() {
    return this.profileHeader.isVisible();
  }
}

module.exports = ProfilePage;
