const Page = require('../___test__helpers/page');
jest.setTimeout(30000);
//Global vars
let page;

beforeEach(async () => {
  page = await Page.build();
  await page.goto('http://localhost:3000');
  await page.login();
  await page.goto('http://localhost:3000/create');
  await page.waitFor('.page-header');
});

afterEach(async () => {
  await page.close();
});

describe('When logged in ', () => {
  describe('And after going to /create url', () => {
    test('Can submit a project', async () => {
      await page.type('input[name="name"]', 'a beautiful project', {
        delay: 50
      });
      await page.click('button[type="submit"]');
      await page.waitFor('.project-details h2');
      const text = await page.$eval('.project-details h2', el => el.innerHTML);
      expect(text).toEqual('a beautiful project');
    });
  });
});

// test('test', async () => {
//   //   await page.click('a[href="/create"]');
//   //   //   console.log(projectLink);
//   //   //   await page.click(projectLink);
//   //
//   const text = await page.$eval('.page-header', el => el.innerHTML);
//   expect(text).toEqual('Create a project');
// });
