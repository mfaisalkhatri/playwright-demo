import { test, expect } from "@playwright/test";

test("page fixture sample test", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/");

  await expect(page).toHaveTitle("Your Store");
});

test("context fixture sample test", async ({ context }) => {
  const page = await context.newPage();

  await page.goto("https://ecommerce-playground.lambdatest.io/");

  await expect(page).toHaveTitle("Your Store");
});

test("browser fixture sample test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://ecommerce-playground.lambdatest.io/");

  await expect(page).toHaveTitle("Your Store");
});