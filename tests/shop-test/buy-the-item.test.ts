import { test, expect } from '@playwright/test';

test('should buy the item', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/sell');
  await page.getByRole('link', { name: 'Welcome! ' }).click();
  await page.getByRole('menuitem', { name: 'Login' }).click();
  await page.getByRole('main').getByRole('textbox', { name: 'Please Enter Your Email' }).click();
  await page.getByRole('main').getByRole('textbox', { name: 'Please Enter Your Email' }).fill('xotabu4@gmail.com');
  await page.getByRole('textbox', { name: 'Please Enter Your Password' }).click();
  await page.getByRole('textbox', { name: 'Please Enter Your Password' }).fill('xotabu4@gmail.com');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Shop' }).click();
  await page.getByRole('link', { name: 'CHERRY TOMATOES By Nizhyn' }).click();
  await page.getByRole('button', { name: 'Add To Bag' }).click();
  await   page.getByRole('button', { name: 'Place Order' }).click();

await expect(page.getByRole("heading", {name: "Thank you for your order."})).toBeVisible();

});