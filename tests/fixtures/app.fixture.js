const { test: base, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const SecureAreaPage = require('../../pages/SecureAreaPage');
const DropdownPage = require('../../pages/DropdownPage');

const test = base.extend({
  app: async ({ page }, use) => {
    const app = {
      loginPage: new LoginPage(page),
      secureAreaPage: new SecureAreaPage(page),
      dropdownPage: new DropdownPage(page),
    };
    await use(app);
  },
});

module.exports = { test, expect };
