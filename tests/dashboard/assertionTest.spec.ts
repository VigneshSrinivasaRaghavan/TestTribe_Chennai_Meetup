import {test, expect} from '@playwright/test'

test('Visible/Hidden Assertion',async({page})=>{
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.locator('[placeholder="Hide/Show Example"]')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('[placeholder="Hide/Show Example"]')).toBeHidden();
    await page.locator('#show-textbox').click();
    await expect(page.locator('[placeholder="Hide/Show Example"]')).toBeVisible();
    await page.close();
})