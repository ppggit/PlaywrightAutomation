const { test, expect } = require('./fixtures/loginPage.fixture');

test('login page object example', async ({ loginPage, dashboardPage, profilePage }) => {
  await loginPage.goto();
  await loginPage.login('user@example.com', 'password123');

  await expect(loginPage.page.locator('text=Logout')).toBeVisible();

  await dashboardPage.goto();
  await expect(dashboardPage.dashboardHeader).toBeVisible();

  await profilePage.goto();
  await expect(profilePage.profileHeader).toBeVisible();
});
