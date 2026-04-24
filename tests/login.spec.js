const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('login page object example', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('user@example.com', 'password123');

  await expect(loginPage.page.locator('text=Logout')).toBeVisible();
});
