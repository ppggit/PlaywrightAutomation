const { test, expect } = require('./fixtures/app.fixture');

test('login page object example', async ({ app }) => {
  await app.loginPage.goto();
  await app.loginPage.login('user@example.com', 'password123');

  await expect(app.loginPage.page.locator('text=Logout')).toBeVisible();

  await app.dashboardPage.goto();
  await expect(app.dashboardPage.dashboardHeader).toBeVisible();

  await app.profilePage.goto();
  await expect(app.profilePage.profileHeader).toBeVisible();
});
