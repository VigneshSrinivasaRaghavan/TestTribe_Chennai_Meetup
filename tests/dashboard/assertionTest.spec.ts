import {test, expect} from '@playwright/test'
import { allure } from "allure-playwright";

test.beforeEach(async()=>{
  await allure.owner("Dashboard Team");
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