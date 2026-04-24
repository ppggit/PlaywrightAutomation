const { test: base, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const ProfilePage = require('../../pages/ProfilePage');

const test = base.extend({
  app: async ({ page }, use) => {
    const app = {
      loginPage: new LoginPage(page),
      dashboardPage: new DashboardPage(page),
      profilePage: new ProfilePage(page),
    };
    await use(app);
  },
});

module.exports = { test, expect };
