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

  xit("should render a list of products", async () => {
    await page.goto("http://localhost:3000");
    const selector = '[data-testid="product"]';
    const products = await page.$$(selector);
    await expect(products.length).toBe(10);
  });

  xit("should show 'out of stock' chip on unavailable products", async () => {
    await page.goto("http://localhost:3000");
    const selector = '[data-testid="product"]';
    const product = await page.$$(selector);
    const text = await product[4].$eval(
      '[data-testid="chip"]',
      (el) => el.innerText
    );
    await expect(text).toBe("out of stock");
  });

  it(
    "should reveal view button only on product card that hovered",
    async () => {
      await page.goto("http://localhost:3000");
      const selector = '[data-testid="product"]';
      const products = await page.$$(selector);
      await products[0].hover();
      await products[3].hover();
      await products[2].hover();
      const activeCardOpacity = await products[2].$eval(
        '[data-testid="secondary-button"]',
        (el) => window.getComputedStyle(el).opacity
      );
      await expect(activeCardOpacity).toBe("1");

      const inactiveCardOpacity = await products[3].$eval(
        '[data-testid="secondary-button"]',
        (el) => window.getComputedStyle(el).opacity
      );
      await expect(inactiveCardOpacity).toBe("0");
    },
    timeout
  );

  it("should navigate user to detail page on valid product card click", async () => {
    await page.goto("http://localhost:3000");
    const selectors = '[data-testid="product"]';
    const products = await page.$$(selectors);
    await products[2].$eval('[data-testid="secondary-button"]', (button) =>
      button.click()
    );
  });

  it.todo("a");
  it.todo("navigates to detail page");
  it.todo("renders product info");
  it.todo("renders color options");
  it.todo("check choose color message");
  it.todo("check quntity input disabile || not");
  it.todo("select a color");
  it.todo("select a option");
  it.todo("increment by 3");
  it.todo("decrement by 1");
  it.todo("check calculated price");
  it.todo("check count in add to cart button");
  it.todo("click on add to cart");
  it.todo("check count on header");
  it.todo("check renders view cart button");
  it.todo("check message 'already in the cart'");
  it.todo("click view cart");
  it.todo("check item is there");
  it.todo("check item quntity");
  it.todo("check item color");
  it.todo("check item variant");
  it.todo("check price");
  it.todo("click on increment untill max");
  it.todo("check calculated price again");
  it.todo("check header price and count");
  it.todo("click back");
  it.todo("clck select a different color");
  it.todo("select a different option");
  it.todo("increment");
  it.todo("click add to cart");
  it.todo("click on header cart button");
  it.todo("click back once");
  it.todo("click back again");
  it.todo("select only color option item");
  it.todo("should render message no options");
  it.todo("increment to max");
  it.todo("click add to cart again");
  it.todo("click view cart again");
  it.todo("check calculated price again once");
  it.todo("drement second item to 0");
  it.todo("check strike through");
  it.todo("remove second item");
  it.todo("check count on header and button");
  it.todo("remove all");
  it.todo("show empty cart");
});
