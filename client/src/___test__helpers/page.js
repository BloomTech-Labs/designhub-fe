const puppeteer = require('puppeteer');

class CustomPage {
  static async build() {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox']
    });
    const page = await browser.newPage();
    const customPage = new CustomPage(page);

    return new Proxy(customPage, {
      get: function(target, property) {
        return customPage[property] || browser[property] || page[property];
      }
    });
  }

  constructor(page) {
    this.page = page;
  }

  async login() {
    await this.page.click('.auth0-redirect-btn');

    await this.page.waitForSelector('input[name="email"]', {
      visible: true,
      timeout: 5000
    });
    await this.page.type('input[name="email"]', 'test@test.com', { delay: 50 });
    await this.page.type('input[name="password"]', 'Test1234', { delay: 50 });

    await this.page.click('button[type="submit"]');
    await this.page.waitFor('.edit-profile-btn');
  }
}

module.exports = CustomPage;
