const puppeteer = require('puppeteer');
jest.setTimeout(30000);

test('renders without crashing', () => {
  const condition = 1 + 2;
  expect(condition).toEqual(3);
});

test('login with auth0', async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.click('.auth0-redirect-btn');

  await page.waitForSelector('input[name="email"]', {
    visible: true,
    timeout: 5000
  });
  await page.type('input[name="email"]', 'test@test.com', { delay: 50 });
  await page.type('input[name="password"]', 'Test1234', { delay: 50 });

  await page.click('button[type="submit"]');
  await page.waitFor('.edit-profile-btn');
  const text = await page.$eval('.edit-profile-btn', el => el.innerHTML);
  expect(text).toEqual('Edit Profile');
});
