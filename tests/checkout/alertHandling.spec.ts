import { test, expect } from '@playwright/test'
import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";

test.beforeEach(async () => {
    await allure.owner("Checkout Team");
    await allure.tags("Smoke");
    await allure.severity(Severity.CRITICAL);
    await allure.feature('Checkout');
    await allure.link("https://example.com/docs", "Related Documentation");
    await allure.issue("AUTH-123", "https://example.com/issues/AUTH-123");
    await allure.tms("TMS-456", "https://example.com/tms/TMS-456");
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