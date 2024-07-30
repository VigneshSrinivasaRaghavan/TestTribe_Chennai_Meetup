import { test, expect } from '@playwright/test'
import { allure } from "allure-playwright";

test.beforeEach(async () => {
    await allure.owner("Checkout Team");
})

test('Simple Alert Handling', async ({ page }) => {
    await allure.description("This test is to test simple Alert handling");
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog", async (alert) => {
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Alert');
        await alert.accept();
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    })
    await page.locator('button[onclick="jsAlert()"]').click();
    await page.close();
});