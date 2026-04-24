const { test, expect } = require('./fixtures/app.fixture');

test('login page object example', async ({ app }) => {
  await app.loginPage.goto();
  await app.loginPage.login('tomsmith', 'SuperSecretPassword!');

  await expect(app.secureAreaPage.dashboardHeader).toBeVisible();

  await app.dropdownPage.goto();
  await app.dropdownPage.selectOption('1');
  await expect(app.dropdownPage.dropdown).toHaveValue('1');
});
