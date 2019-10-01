const Page = require('../___test__helpers/page');
jest.setTimeout(30000);
//Global vars
let page;
let userDataHeaders = ['Projects', 'Followers', 'Following', 'Starred'];

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
  await page.login();
});

afterEach(async () => {
  await page.close();
});

describe('When logged in', () => {
  // beforeEach(async () => {

  // });

  describe('And on view profile tab', () => {
    test('Header for number of projects, followers, following, and starred displays', async () => {
      const projects = await getUserDataHeaders(0, page);
      const followers = await getUserDataHeaders(1, page);
      const following = await getUserDataHeaders(2, page);
      const starred = await getUserDataHeaders(3, page);

      expect([projects, followers, following, starred]).toEqual(
        userDataHeaders
      );
    });

    test('Number of Projects is displaying', async () => {
      const projectsCount = await getUserDataCounts(0, page);
      const followersCount = await getUserDataCounts(1, page);
      const followingCount = await getUserDataCounts(2, page);
      const starredCount = await getUserDataCounts(3, page);
      expect([
        projectsCount,
        followersCount,
        followingCount,
        starredCount
      ]).toEqual(['string', 'string', 'string', 'string']);
    });
  });
});
