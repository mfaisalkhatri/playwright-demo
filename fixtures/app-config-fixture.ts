import { test as base, expect } from "@playwright/test";

type AppConfig = {
  baseUrl: string;
};

export const test = base.extend<{ appConfig: AppConfig }>({
  appConfig: async ({ baseURL }, use) => {
    if (!baseURL) {
      throw new Error("baseURL is not defined in the Playwright config!");
    }
    await use({
      baseUrl: baseURL,
    });
  },
});

export {expect}