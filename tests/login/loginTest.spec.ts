import {test} from '@playwright/test'
import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";

test.beforeEach(async()=>{
    await allure.owner("Login Team");
    await allure.tags("Sanity");
    await allure.severity(Severity.NORMAL);
    await allure.feature('Login');
  })

test('Login Test for Orange HRM',async({page})=>{
    await allure.step("Navigating to Website", async () => {
        await page.goto('https://opensource-demo.orangehrmlive.com');
    });

    await allure.step("Login steps", async () => {
        await page.locator('input[placeholder="Username"]').fill('Admin');
        await page.locator('input[placeholder="Password"]').fill('admin123');
        await page.locator('button[type="submit"]').click();    
    });
    
    await allure.step("Logout steps", async () => {
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    });

    await page.close();
})