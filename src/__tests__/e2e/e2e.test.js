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
      expect(activeCardOpacity).toBe("1");

      const inactiveCardOpacity = await products[3].$eval(
        '[data-testid="secondary-button"]',
        (el) => window.getComputedStyle(el).opacity
      );
      expect(inactiveCardOpacity).toBe("0");
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
    const btnSelector = '[data-testid="add-to-cart-btn"]';
    const disabled = await page.$eval(btnSelector, (button) => button.disabled);
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

  xit("should calculat total price accordingly", async () => {
    const priceForTwo = +data.items[2].price * 2;
    const price = currencyformatter(priceForTwo);
    const element = await page.$('[data-testid="calc-price"]');
    const value = await page.evaluate((el) => el.textContent, element);
    const elPrice = value.replace(/[^\d.-]/g, "");
    expect(price).toBe(elPrice);
  });

  xit("should enable the add to cart button", async () => {
    const selector = '[data-testid="add-to-cart-btn"]';
    const disabled = await page.$eval(selector, (button) => button.disabled);
    expect(disabled).toBe(false);
  });

  it("should click on add to cart", async () => {
    const selector = '[data-testid="add-to-cart-btn"]';
    await page.$eval(selector, (button) => button.click());
  });

  xit("should update the price in the header", async () => {
    const element = await page.$('[data-testid="header-total"]');
    const value = await page.evaluate((el) => el.textContent, element);

    const priceForTwo = +data.items[2].price * 2;
    const formattedPrice = value.split(".")[0].replace(/[^\d.-]/g, "");
    expect(priceForTwo).toBe(+formattedPrice);
  });

  it("should update the quantity in the header", async () => {
    const element = await page.$('[data-testid="header-total"]');
    const value = await page.evaluate((el) => el.textContent, element);

    const formattedPrice = value
      .split(".")[1]
      .replace(/[^\d.-]/g, "")
      .replaceAll("0", "");
    expect(formattedPrice).toBe("2");
  });

  xit("should render the view cart button and hide add to cart button", async () => {
    const viewCartBtn = await page.$('[data-testid="view-cart-btn"]');
    expect(viewCartBtn).toBeTruthy();
    const addTOCartBtn = await page.$('[data-testid="add-to-cart-btn"]');
    expect(addTOCartBtn).toBeFalsy();
  });

  xit("should render the message 'already in the cart'", async () => {
    const selector = '[data-testid="already-added-msg"]';
    await page.waitForSelector(selector);

    const element = await page.$(selector);
    expect(element).toBeTruthy();

    const message = await page.$eval(selector, (ele) => ele.textContent);
    expect(message).toBe("2 items already in the cart");
  });

  it("should navigate to cart/checkout page", async () => {
    await page.waitForTimeout(3000);
    const selector = '[data-testid="view-cart-btn"]';
    await page.$eval(selector, (button) => button.click());
  });

  xit("should render cart/checkout page", async () => {
    const selector = '[data-testid="my-cart"]';
    await page.waitForSelector(selector);
    const message = await page.$eval(selector, (ele) => ele.textContent);
    expect(message).toBe("My Cart (2)");
  });

  xit("should show the added item in the cart", async () => {
    const selector = '[data-testid="cart-items"]';
    const items = await page.$$(selector);
    expect(items.length).toBe(1);
  });

  xit("should show added item's name", async () => {
    const element = await page.$x("//p[contains(., 'Playstation 4')]");
    const name = await element[0].evaluate((el) => el.textContent);
    expect(name).toBe(data.items[2].name);
  });

  xit("should show added item's color", async () => {
    const element = await page.$x("//p[contains(., 'white')]");
    const color = await element[0].evaluate((el) => el.textContent);
    expect(color).toBe(data.items[2].options[1].color.toString());
  });

  xit("should show added item's variant", async () => {
    const selector = '[data-testid="chip"]';
    const value = await page.$eval(selector, (ele) => ele.textContent);
    expect(value).toBe("storage - 250");
  });

  xit("should show added item's quntity", async () => {
    const selector = '[data-testid="quantity-count"]';
    const value = await page.$eval(selector, (ele) => ele.textContent);
    expect(value).toBe("2");
  });

  it("should click on increment untill in reaches max", async () => {
    const selector = '[data-testid="quantity-increment"]';
    await page.$eval(selector, (button) => button.click());
    await page.$eval(selector, (button) => button.click());
  });

  xit("should recalculate the price", async () => {
    const selector = '[data-testid="cart-item-price"]';
    const value = await page.$eval(selector, (ele) => ele.textContent);
    const formattedPrice = value.replace(/[^\d.-]/g, "");
    expect(formattedPrice).toBe("15000.00");
  });

  xit("should update price and count in the header", async () => {
    const element = await page.$('[data-testid="header-total"]');
    const value = await page.evaluate((el) => el.textContent, element);

    // price
    const price = value.split(".")[0].replace(/[^\d.-]/g, "");
    expect(price).toBe("15000");

    // count
    const count = value.split(".")[1].replaceAll("0", "");
    expect(count).toBe("3");
  });

  it("should click on back button", async () => {
    const selector = '[data-testid="back-btn"]';
    await page.$eval(selector, (button) => button.click());
  });

  it("should choose different color", async () => {
    const selector = '[data-testid="radio-group-color-black"]';
    await page.$eval(selector, (button) => button.click());
  });

  it("should choose a different option", async () => {
    const selector = '[data-testid="radio-group-storage-500"]';
    await page.$eval(selector, (button) => button.click());
  });

  it("should increment the quantity for new option", async () => {
    const selector = '[data-testid="quantity-increment"]';
    await page.$eval(selector, (button) => button.click());
    await page.$eval(selector, (button) => button.click());
    await page.$eval(selector, (button) => button.click());
    await page.$eval(selector, (button) => button.click());
  });

  it("should click add to cart", async () => {
    const selector = '[data-testid="add-to-cart-btn"]';
    await page.$eval(selector, (button) => button.click());
  });

  it("should click on the header cart button", async () => {
    await page.waitForTimeout(3000);
    const selector = '[data-testid="header-total"]';
    await page.$eval(selector, (button) => button.click());
  });

  it("should click back twice", async () => {
    await page.waitForTimeout(1500);
    const selector = '[data-testid="back-btn"]';
    await page.$eval(selector, (button) => button.click());
    await page.waitForTimeout(1500);
    await page.$eval(selector, (button) => button.click());
  });

  it("should select only color option item/product", async () => {
    const selector = '[data-testid="product"]';
    const products = await page.$$(selector);
    await products[0].hover();
    await products[7].hover();
    await products[9].hover();
    await page.waitForTimeout(500);
    await products[9].$eval('[data-testid="secondary-button"]', (button) =>
      button.click()
    );
  });

  it("should should render message no options", async () => {
    const selector = '[data-testid="radio-group-color-red"]';
    await page.$eval(selector, (button) => button.click());

    const msg = '[data-testid="no-option-msg"]';
    await page.waitForSelector(msg);

    const element = await page.$(msg);
    expect(element).toBeTruthy();

    const message = await page.$eval(msg, (ele) => ele.textContent);
    expect(message).toBe("no options available");
  });

  it("should increment quantity", async () => {
    const selector = '[data-testid="quantity-increment"]';
    await page.$eval(selector, (button) => button.click());
    await page.$eval(selector, (button) => button.click());
    await page.$eval(selector, (button) => button.click());
    await page.$eval(selector, (button) => button.click());
  });

  it("should add new item to the cart", async () => {
    const selector = '[data-testid="add-to-cart-btn"]';
    await page.$eval(selector, (button) => button.click());
  });

  it("should click view cart button", async () => {
    await page.waitForTimeout(3000);
    const selector = '[data-testid="view-cart-btn"]';
    await page.$eval(selector, (button) => button.click());
  });

  it("should decrement second item (white ps4) to 0", async () => {
    const selector = '[data-testid="quantity-decrement"]';
    const items = await page.$$(selector);
    await items[1].click();
    await items[1].click();
    await items[1].click();
    // await products[1].$eval('[data-testid="secondary-button"]', (button) =>
    //   button.click()
    // );
    // quantity-decrement
  });

  it("should recalculate the price with new item", async () => {
    const selector = '[data-testid="cart-sub-total"]';
    const value = await page.$eval(selector, (ele) => ele.textContent);
    const formattedPrice = value.replace(/[^\d.-]/g, "");
    expect(formattedPrice).toBe("24800.00");
  });
  it.todo("should check strike through");
  it.todo("should remove second item");
  it.todo("should check count on header and button");
  it.todo("should remove all");
  it.todo("should show empty cart");
});
