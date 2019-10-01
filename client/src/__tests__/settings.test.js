const Page = require('../___test__helpers/page');
jest.setTimeout(30000);
//Global vars
let page;

beforeEach(async () => {
  page = await Page.build();
  await page.goto('http://localhost:3000');
  await page.login();
  await page.goto('http://localhost:3000/settings');
  await page.waitFor('.page-header');
});

afterEach(async () => {
  await page.close();
});
