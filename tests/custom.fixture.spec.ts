import { test, expect } from "../fixtures/app-config-fixture";

test("test custom playwright fixture using app config", async ({
  page,
  appConfig,
}) => {
  await page.goto(appConfig.baseUrl);
  await expect(page).toHaveTitle("Your Store");
});
