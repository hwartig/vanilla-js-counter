import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('index.html');
  let counterValue = await page.getByTestId('counter').innerText();
  expect(counterValue).toBe('0');

  await page.getByRole('button', { name: '+' }).click();
  counterValue = await page.getByTestId('counter').innerText();
  expect(counterValue).toBe('1');

  await page.getByRole('button', { name: '-' }).click();
  counterValue = await page.getByTestId('counter').innerText();
  expect(counterValue).toBe('0');
});
