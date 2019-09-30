class CustomPage {
  static async build() {
    const browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    const customPage = new CustomPage(page);

    return new Proxy(customPage, {
      get: function(target, property) {
        return customPage[propery] || browser[property] || page[property];
      }
    });
  }
}
