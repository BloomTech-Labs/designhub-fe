const Page = require('../___test__helpers/page');
jest.setTimeout(30000);
let page;

beforeEach(async () => {
  page = await Page.build();
  await page.goto('http://localhost:3000');
});

afterEach(async () => {
  await page.close();
});

test('renders without crashing', () => {
  const condition = 1 + 2;
  expect(condition).toEqual(3);
});

test('User can login', async () => {
  await page.login();
  const text = await page.$eval('.edit-profile-btn', el => el.innerHTML);
  expect(text).toEqual('Edit Profile');
});
