import { test, expect } from '@playwright/test';

test('should create a new user', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/sell');
  await page.getByRole('textbox', { name: 'Your Full Name' }).fill('Dima Test');
  await page
    .getByRole('textbox', { name: 'Your Email Address' })
    .fill(Date.now() + 'dimatest@wix.com');
  await page.getByRole('textbox', { name: 'Your Phone Number' }).fill('1212121212');
  await page.getByRole('textbox', { name: 'Your Business Brand' }).fill('brand.com');
  await page.getByRole('textbox', { name: 'Please Describe Your Business' }).fill('Hello World!');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('main')).toMatchAriaSnapshot(`
    - text: Name
    - textbox "Your Full Name"
    `);
await page.getByText('Name').click();
await expect(page.getByRole('main')).toContainText('Name');

await page.getByText('Name').click({
    button: 'right'
  });
});

