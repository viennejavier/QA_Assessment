import { Page } from '@playwright/test';

export function addButton(page: Page, productId: string) {
  return page.locator(`[data-test="add-to-cart-${productId}"]`);
}

export function removeButton(page: Page, productId: string) {
  return page.locator(`[data-test="remove-${productId}"]`);
}

export function cartBadge(page: Page) {
  return page.locator('[data-test="shopping-cart-badge"]');
}

export function cartLink(page: Page) {
  return page.locator('[data-test="shopping-cart-link"]');
}

export function cartItems(page: Page) {
  return page.locator('[data-test="inventory-item"]');
}
