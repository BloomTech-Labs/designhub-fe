const Page = require('../___test__helpers/page');
jest.setTimeout(30000);
//Global vars
let page;

beforeEach(async () => {
  page = await Page.build();
  await page.goto('http://localhost:3000');
  await page.login();
  await page.goto('http://localhost:3000/settings');
  await page.waitFor('.logout-btn');
});

afterEach(async () => {
  await page.close();
});

describe('When logged in ', () => {
  describe('And after going to /settings url', () => {
    test('User can log out', async () => {
      await page.click('.logout-btn');
      await page.waitFor('.join-head');

      const text = await page.$eval('.join-head', el => el.innerHTML);
      expect(text).toEqual('Join DesignHub today.');
    });
  });
});
