import { test, expect } from '@playwright/test';
import { allure } from "allure-playwright";

test.beforeEach(async()=>{
  await allure.owner("Dashboard Team");
})

test('Using Fill Method', async ({ page }) => {
  await allure.description("This is to calendar Function");
  await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
  let date = "1993-10-18";
  await page.locator('#birthday').fill(date);
  await page.pause();
});