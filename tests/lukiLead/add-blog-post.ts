import { test, expect } from '@playwright/test';

test('User can add blog post to the ', async ({ page }) => {
  await page.goto('https://lukilead.com/admin');
  await page.getByRole('textbox', { name: 'Enter password' }).click();
  await page.getByRole('textbox', { name: 'Enter password' }).fill('!@#$%^&*()_+');
  await page.getByRole('button', { name: 'Unlock Admin Panel' }).click();
  await page.getByRole('button', { name: 'New Post' }).click();
  await page.getByText('/post-url-slug').click();
  await page.getByRole('textbox', { name: 'Post title...' }).click();
  await page.getByRole('textbox', { name: 'Post title...' }).fill('Del Me!!!!');
  await page.getByRole('switch').nth(1).click();
  await page.getByRole('textbox', { name: 'Brief summary that appears in' }).click();
  await page.getByRole('textbox', { name: 'Brief summary that appears in' }).fill('Del me except me');
  await page.locator('.tiptap').click();
  await page.locator('.tiptap').fill('Content here!t');
  await page.getByRole('textbox', { name: 'Add tag...' }).click();
  await page.getByRole('textbox', { name: 'Add tag...' }).fill('ab');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('min read•/test-post-delete-me').nth(2).click();
});