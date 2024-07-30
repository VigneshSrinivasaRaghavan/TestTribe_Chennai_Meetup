import { test, expect } from '@playwright/test';
import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";

test.beforeEach(async()=>{
  await allure.owner("Dashboard Team");
  await allure.tags("Smoke", "Regression");
  await allure.severity(Severity.NORMAL);
  await allure.feature('Dashboard');
})

test('Using Fill Method', async ({ page }) => {
  await allure.description("This is to calendar Function");
  await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
  let date = "1993-10-18";
  await page.locator('#birthday').fill(date);
  await page.pause();
});