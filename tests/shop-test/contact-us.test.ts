import { test, expect } from '@playwright/test';

test('Should submit the contact form with random email', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/contact');
  await page.getByRole('textbox', { name: 'You Full Name' }).click();
  await page.getByRole('textbox', { name: 'You Full Name' }).fill('dima@wix.com');
  await page.getByRole('textbox', { name: 'You Full Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Please Describe Your Message' }).click();
  await page.getByRole('textbox', { name: 'Please Describe Your Message' }).fill('Hello! I need help please!!!');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'Your Email Address' }).click();
  await page.getByRole('textbox', { name: 'Your Email Address' }).fill('dim4ikwwjd' + Date.now() + '@gmail.com');
  await page.getByRole('button', { name: 'Submit' }).click();

});

test('Should NOT submit the contact form with the same email', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/contact');
  await page.getByRole('textbox', { name: 'You Full Name' }).click();
  await page.getByRole('textbox', { name: 'You Full Name' }).fill('dima@wix.com');
  await page.getByRole('textbox', { name: 'You Full Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Please Describe Your Message' }).click();
  await page.getByRole('textbox', { name: 'Please Describe Your Message' }).fill('Hello! I need help please!!!');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('heading', {name: "Please Try Again!"}).isVisible();
  await page.getByRole('generic', {name: "A request already existed for same email address"}).isVisible();
  await page.getByText( "A request already existed for same email address" ).isVisible();
});


// Heading -  "Please Try Again!"

// Name: "A request already existed for same email address"
