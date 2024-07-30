import { test, expect } from '@playwright/test'
import { allure } from "allure-playwright";

test.beforeEach(async()=>{
  await allure.owner("Login Team");
})
test('Checkbox button Handling', async ({ page }) => {
    await allure.description("This is to the checkbox handling");
    await page.goto('https://demo.automationtesting.in/Register.html');
    const cricketCheckbox = page.locator('#checkbox1');
    const moviesCheckbox = page.locator('#checkbox2');
    const hockeyCheckbox = page.locator('#checkbox3');
    await page.close();
});
