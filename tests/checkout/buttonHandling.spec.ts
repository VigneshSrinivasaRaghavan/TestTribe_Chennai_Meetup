import { test, expect } from '@playwright/test';
import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";

test.beforeEach(async()=>{
  await allure.owner("Checkout Team");
  await allure.tags("Sanity");
    await allure.severity(Severity.MINOR);
    await allure.feature('Checkout');
})

test('Regular Button single click', async ({ page }) => {
  await allure.description("This is to the Regular click action");
  await page.goto('https://play1.automationcamp.ir/mouse_events.html');
  await page.locator('#click_area').click();
  await expect(page.locator('#click_type')).toHaveText('Click');
  
});

test('Double Click', async ({ page }) => {
  await allure.description("This is to the Left click action");
  await page.goto('https://play1.automationcamp.ir/mouse_events.html');
  await page.locator('#click_area').dblclick();
  await expect(page.locator('#click_type')).toHaveText('Double-Click');
});

test('Right Click', async ({ page }) => {
  await allure.description("This is to the Right click action");
  await page.goto('https://play1.automationcamp.ir/mouse_events.html');
  await page.locator('#click_area').click({button:'right'});
  await expect(page.locator('#click_type')).toHaveText('Right');
});