import { test, expect } from '@playwright/test';                                                                                                        // importing 'test' allows the script to know that it's testing; 'expect' for the script to check the test
import { testData } from '../utils/test-data.ts';                                                                                                       // imports the separate file for test data; please refrain from changing anything in the main code, and edit the details there
import { addButton, removeButton, cartBadge, cartLink, cartItems } from '../utils/test-helpers.ts';

test.describe('Add to Cart Feature', () => {                                                                                                            // test cases for add to cart feature
    test.beforeEach(async ({ page }) => {                                                                                                               // precondition: login the user before each test
        await page.goto('https://www.saucedemo.com/');                                                                                                  // opens the browser and goes to the indicated website
        await page.locator('[data-test="username"]').fill(testData.login.standardUser.username);                                                        // locates the username in the page and inputs username data
        await page.locator('[data-test="password"]').fill(testData.login.standardUser.password);                                                        // locates the password in the page and inputs password data
        await page.click('#login-button');                                                                                                              // locates the login button then clicks
        await expect(page.locator('[data-test="title"]')).toHaveText('Products');                                                                       // wait for the next page to load before proceeding
    });

    test('Add single product to cart', async ({ page }) => {                                                                                            // action: add one product
        const products = ['sauce-labs-backpack'];                                                                                                       // declare the first product on the list as the one item to add to cart

        for (const product of products) {                                                                                                               // add a for loop for each of the products declared
            await addButton(page, product).click();                                                                                                     // for each, click the add to cart button
            await expect(removeButton(page, product)).toHaveText('Remove');                                                                             // the add to cart button should change to remove for each of the items added to cart
        }

        await expect(cartBadge(page)).toHaveText(`${products.length}`);                                                                                 // the cart should display the exact number of products added
    });

    test('Add two products to cart', async ({ page }) => {                                                                                              // action: add two products
        const products = ['sauce-labs-backpack', 'sauce-labs-bike-light'];                                                                              // declare the products to be added to cart

        for (const product of products) {                                                                                                               // implement the same for loop above
            await addButton(page, product).click();
            await expect(removeButton(page, product)).toHaveText('Remove');
        }

        await expect(cartBadge(page)).toHaveText(`${products.length}`);
    });

    test('Add three products to cart', async ({ page }) => {                                                                                            // action: add three products
        const products = ['sauce-labs-backpack', 'sauce-labs-bike-light', 'sauce-labs-bolt-t-shirt'];                                                   // declare the products to be added to cart

        for (const product of products) {                                                                                                               // implement the same for loop above
            await addButton(page, product).click();
            await expect(removeButton(page, product)).toHaveText('Remove');
        }

        await expect(cartBadge(page)).toHaveText(`${products.length}`);
    });

    test('Add four products to cart', async ({ page }) => {                                                                                             // action: add four products
        const products = [                                                                                                                              // declare the products to be added to cart
            'sauce-labs-backpack',
            'sauce-labs-bike-light',
            'sauce-labs-bolt-t-shirt',
            'sauce-labs-fleece-jacket'
        ];

        for (const product of products) {
            await addButton(page, product).click();
            await expect(removeButton(page, product)).toHaveText('Remove');
        }

        await expect(cartBadge(page)).toHaveText(`${products.length}`);
    });

    test('Add five products to cart', async ({ page }) => {                                                                                             // action: add four products
        const products = [                                                                                                                              // declare the products to be added to cart
            'sauce-labs-backpack',
            'sauce-labs-bike-light',
            'sauce-labs-bolt-t-shirt',
            'sauce-labs-fleece-jacket',
            'sauce-labs-onesie'
        ];

        for (const product of products) {
            await addButton(page, product).click();
            await expect(removeButton(page, product)).toHaveText('Remove');
        }

        await expect(cartBadge(page)).toHaveText(`${products.length}`);
    });

    test('Add six products to cart', async ({ page }) => {                                                                                              // action: add four products
        const products = [                                                                                                                              // declare the products to be added to cart
            'sauce-labs-backpack',
            'sauce-labs-bike-light',
            'sauce-labs-bolt-t-shirt',
            'sauce-labs-fleece-jacket',
            'sauce-labs-onesie',
            'test.allthethings()-t-shirt-(red)'
        ];

        for (const product of products) {
            await addButton(page, product).click();
            await expect(removeButton(page, product)).toHaveText('Remove');
        }

        await expect(cartBadge(page)).toHaveText(`${products.length}`);
    });

    test('Verify cart contents after adding a product', async ({ page }) => {                                                                           // action: add a product and go to cart to verify that it was correctly added                                                                     
        const products = ['sauce-labs-backpack'];                                                                                                       // declare a product
        for (const product of products) {                                                                                                               // implement the same for loop                                       
            await addButton(page, product).click();
        }

        await cartLink(page).click();                                                                                                                   // after adding the products, click the cart
        
        await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');                                              // checks if the product is in the cart                                         
        await expect(cartItems(page)).toHaveCount(products.length);                                                                                     // the cart items element should have the same amount of products added
    });
});