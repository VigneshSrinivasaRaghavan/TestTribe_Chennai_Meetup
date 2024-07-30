import { test, expect } from '@playwright/test'

test('Checkbox button Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    const cricketCheckbox = page.locator('#checkbox1');
    const moviesCheckbox = page.locator('#checkbox2');
    const hockeyCheckbox = page.locator('#checkbox3');

    // Way 1 Assert
    expect(cricketCheckbox).not.toBeChecked();
    expect(moviesCheckbox).not.toBeChecked();
    expect(hockeyCheckbox).not.toBeChecked();
    await page.close();
});
