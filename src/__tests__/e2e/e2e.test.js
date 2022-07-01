const puppeteer = require("puppeteer");

const timeout = 15000;

describe("Google", () => {
  // beforeAll(async () => {
  //   await page.goto("http://localhost:3000");
  // });

  it(
    "load the app",
    async () => {
      const browser = await puppeteer.launch({ headless: false, slowMo: 200 });
      const page = await browser.newPage();
      await page.goto("http://localhost:3000");
      try {
        await expect(page).toFill("#searchin", "asd", { delay: 250 });
        // await page.waitForTimeout(500);
        console.log("found");
      } catch {
        console.log("not found");
      }
    },
    timeout
  );
});
