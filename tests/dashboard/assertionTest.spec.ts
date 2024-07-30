import {test, expect} from '@playwright/test'
import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";

test.beforeEach(async()=>{
  await allure.owner("Dashboard Team");
  await allure.tags("Regrssion");
  await allure.severity(Severity.BLOCKER);
  await allure.feature('Dashboard');
})
test('Visible/Hidden Assertion',async({page})=>{
    await allure.description("This is to test the Assertion for Visible/Hidden");
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.locator('[placeholder="Hide/Show Example"]')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('[placeholder="Hide/Show Example"]')).toBeHidden();
    await page.locator('#show-textbox').click();
    await expect(page.locator('[placeholder="Hide/Show Example"]')).toBeVisible();
    await page.close();
})