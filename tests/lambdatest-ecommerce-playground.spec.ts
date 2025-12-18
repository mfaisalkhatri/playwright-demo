import test  from '../fixtures/lambdatest-setup'
import {expect} from '@playwright/test'

test("Custom fixture test on LambdaTest cloud", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/");

  await page.getByRole('textbox', { name: 'Search For Products' }).fill('Camera');
  await page.getByRole('button', {name: 'Search'}).click();

  await expect( page.getByText('There is no product that matches the search criteria.')).toBeVisible();
});
