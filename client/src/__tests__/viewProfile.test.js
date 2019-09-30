const Page = require('../___test__helpers/page');
jest.setTimeout(30000);
//Global vars
let page;

//helper functions

const getUserDataHeaders = async (number, page) => {
  return page.evaluate(
    number => {
      return document.querySelectorAll('.user-data h6')[number].innerHTML;
    },

    number
  );
};

const getUserDataCounts = async (number, page) => {
  return page.evaluate(
    number => {
      const num = document.querySelectorAll('.user-data p')[number].innerHTML;
      return typeof num;
    },

    number
  );
};

beforeEach(async () => {
  page = await Page.build();
  await page.goto('http://localhost:3000');
});

afterEach(async () => {
  await page.close();
});

describe('When logged in', () => {
  beforeEach(async () => {
    await page.login();
  });

  describe('And on view profile tab', () => {
    test('Header for number of projects displays', async () => {
      const value = await getUserDataHeaders(0, page);

      expect(value).toEqual('Projects');
    });
    test('Header for number of followers displays', async () => {
      const value = await getUserDataHeaders(1, page);

      expect(value).toEqual('Followers');
    });
    test('Header for number of following displays', async () => {
      const value = await getUserDataHeaders(2, page);

      expect(value).toEqual('Following');
    });
    test('Header for number of starred displays', async () => {
      const value = await getUserDataHeaders(3, page);

      expect(value).toEqual('Starred');
    });
    test('Number of Projects is displaying', async () => {
      const value = await getUserDataCounts(0, page);
      expect(value).toEqual('string');
    });
    test('Number of Followers is displaying', async () => {
      const value = await getUserDataCounts(1, page);
      expect(value).toEqual('string');
    });
    test('Number of Following is displaying', async () => {
      const value = await getUserDataCounts(2, page);
      expect(value).toEqual('string');
    });
    test('Number of Starred is displaying', async () => {
      const value = await getUserDataCounts(3, page);
      expect(value).toEqual('string');
    });
  });
});
