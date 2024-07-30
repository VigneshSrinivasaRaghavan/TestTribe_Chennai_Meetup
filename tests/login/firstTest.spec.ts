import {test, expect} from '@playwright/test';
import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";

test.beforeEach(async()=>{
  await allure.owner("Login Team");
  await allure.tags("Smoke");
  await allure.severity(Severity.TRIVIAL);
  await allure.feature('Login');
})

test('My First Test', async({page})=>{
    await allure.description("This is to test the Google Homepage");
    await page.goto('https://google.com');

    // Expect a title
    await expect(page).toHaveTitle('Vignesh');
});