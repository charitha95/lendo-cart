const { cleanup } = require("@testing-library/react");
const puppeteer = require("puppeteer");

const timeout = 15000;

afterEach(cleanup);

describe("Lendo Cart E2E", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 200,
      defaultViewport: null
    });
    page = await browser.newPage();
  });

  xit(
    "should render home page with welcome message",
    async () => {
      await page.goto("http://localhost:3000");
      const selector = '[data-testid="welcome"]';
      await page.waitForSelector(selector);
      const text =
        "Good morning! it's a good day to shopping. Hope you will find what you need!";
      await expect(page).toMatchElement(selector, { text });
    },
    timeout
  );

  xit("should show 0 as the item count in the header", async () => {
    await page.goto("http://localhost:3000");
    const selector = '[data-testid="bubble"]';
    await page.waitForSelector(selector);
    await expect(page).toMatchElement(selector, { text: "0" });
  });

  it("should render a list of products", async () => {
    await page.goto("http://localhost:3000");
    const selectors = '[data-testid="product"]';
    const products = await page.$$(selectors);
    await expect(products.length).toBe(10);
  });
});
