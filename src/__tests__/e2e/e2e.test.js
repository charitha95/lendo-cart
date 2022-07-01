const puppeteer = require("puppeteer");
const { cleanup } = require("@testing-library/react");
const data = require("../../data/products.json");
const currencyformatter = require("../helpers/currencyformatter");
const removeEmptySpaces = require("../helpers/removeEmptySpaces");

const timeout = 15000;

afterEach(cleanup);

describe("Lendo Cart E2E", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 200,
      defaultViewport: null,
      args: ["--start-maximized"]
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

  xit(
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

  it(
    "should navigate user to detail page on valid product card click",
    async () => {
      await page.goto("http://localhost:3000");
      const selectors = '[data-testid="product"]';
      const products = await page.$$(selectors);
      await products[2].$eval('[data-testid="secondary-button"]', (button) =>
        button.click()
      );
    },
    timeout
  );

  xit("should render product detail page", async () => {
    const selector = '[data-testid="product-name"]';
    await page.waitForSelector(selector);
    await expect(page).toMatchElement(selector, {
      text: data.items[2].name
    });
  });

  xit("should render product info", async () => {
    const price = currencyformatter(data.items[2].price);
    const element = await page.$('[data-testid="product-price"]');
    const value = await page.evaluate((el) => el.textContent, element);
    const elPrice = value.replace(/[^\d.-]/g, "");

    expect(elPrice).toBe(price);

    await expect(page).toMatchElement('[data-testid="product-name"]', {
      text: data.items[2].name
    });
    await expect(page).toMatchElement('[data-testid="product-brand"]', {
      text: data.items[2].brand
    });
    await expect(page).toMatchElement('[data-testid="product-weight"]', {
      text: data.items[2].weight
    });
  });

  xit("should render product's color options", async () => {
    const selector = '[data-testid="radio-group-color-black"]';
    const message = await page.$eval(selector, (ele) => ele.textContent);
    expect(removeEmptySpaces(message)).toBe(
      data.items[2].options[0].color.toString()
    );
  });

  xit("should render message 'please select a color'", async () => {
    const selector = '[data-testid="color-msg"]';
    const message = await page.$eval(selector, (ele) => ele.textContent);
    expect(message).toBe("please select a color");
  });

  xit("should check quntity input is disabiled", async () => {
    const selector = '[data-testid="quantity-increment"]';
    const isIncrementBtnDisabled = await page.$eval(selector, (button) => {
      return button.disabled;
    });
    expect(isIncrementBtnDisabled).toBe(true);

    const selectorDecrement = '[data-testid="quantity-decrement"]';
    const isDecrementBtnDisabled = await page.$eval(
      selectorDecrement,
      (button) => {
        return button.disabled;
      }
    );
    expect(isDecrementBtnDisabled).toBe(true);
  });

  it("should select a color", async () => {
    const selector = '[data-testid="radio-group-color-white"]';
    await page.$eval(selector, (button) => button.click());
  });

  xit("should validate quantity inputs", async () => {
    const selectorDecrement = '[data-testid="quantity-decrement"]';
    const isDecrementBtnDisabled = await page.$eval(
      selectorDecrement,
      (button) => {
        return button.disabled;
      }
    );
    expect(isDecrementBtnDisabled).toBe(true);

    const selector = '[data-testid="quantity-increment"]';
    const isIncrementBtnDisabled = await page.$eval(selector, (button) => {
      return button.disabled;
    });
    expect(isIncrementBtnDisabled).toBe(false);
  });

  xit("should validate add to cart action", async () => {
    const button = await page.$x("//button[contains(., 'Add to cart')]");
    const disabled = await page.evaluate((el) => el.disabled, button[0]);
    expect(disabled).toBe(true);

    const selector = '[data-testid="option-smg"]';
    const message = await page.$eval(selector, (ele) => ele.textContent);
    expect(message).toBe("please select a storage option from above");
  });

  it("should select a option", async () => {
    const selector = '[data-testid="radio-group-storage-250"]';
    await page.$eval(selector, (button) => button.click());
  });

  it("should increment quantity by 3", async () => {
    const selector = '[data-testid="quantity-increment"]';
    await page.$eval(selector, (button) => button.click());
    await page.$eval(selector, (button) => button.click());
    await page.$eval(selector, (button) => button.click());
  });

  it("should decrement quantity by 1", async () => {
    const selector = '[data-testid="quantity-increment"]';
    await page.$eval(selector, (button) => button.click());
    await page.$eval(selector, (button) => button.click());
    await page.$eval(selector, (button) => button.click());

    const selectord = '[data-testid="quantity-decrement"]';
    await page.$eval(selectord, (button) => button.click());
  });

  it("should calculated price accordingly", async () => {
    const priceForTwo = +data.items[2].price * 2;
    const price = currencyformatter(priceForTwo);
    const element = await page.$('[data-testid="calc-price"]');
    const value = await page.evaluate((el) => el.textContent, element);
    const elPrice = value.replace(/[^\d.-]/g, "");
    expect(price).toBe(elPrice);
  });

  it("should enable the add to cart button", async () => {
    const button = await page.$x("//button[contains(., 'Add to cart')]");
    const disabled = await page.evaluate((el) => el.disabled, button[0]);
    expect(disabled).toBe(false);
  });
  it.todo("should check count in add to cart button");
  it.todo("should click on add to cart");
  it.todo("should check count on header");
  it.todo("should check renders view cart button");
  it.todo("should check message 'already in the cart'");
  it.todo("should click view cart");
  it.todo("should check item is there");
  it.todo("should check item quntity");
  it.todo("should check item color");
  it.todo("should check item variant");
  it.todo("should check price");
  it.todo("should click on increment untill max");
  it.todo("should check calculated price again");
  it.todo("should check header price and count");
  it.todo("should click back");
  it.todo("should clck select a different color");
  it.todo("should select a different option");
  it.todo("should increment");
  it.todo("should click add to cart");
  it.todo("should click on header cart button");
  it.todo("should click back once");
  it.todo("should click back again");
  it.todo("should select only color option item");
  it.todo("should should render message no options");
  it.todo("should increment to max");
  it.todo("should click add to cart again");
  it.todo("should click view cart again");
  it.todo("should check calculated price again once");
  it.todo("should drement second item to 0");
  it.todo("should check strike through");
  it.todo("should remove second item");
  it.todo("should check count on header and button");
  it.todo("should remove all");
  it.todo("should show empty cart");
});
