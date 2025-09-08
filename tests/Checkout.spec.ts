import { test, expect } from '@playwright/test';
import { testData, expectedTexts } from '../utils/test-data';

test.describe('Checkout Feature', () => {                                                                                                               // test cases for checkout feature

    test.beforeEach(async ({ page }) => {                                                                                                               // precondition: login                                                                                                                                              
        await page.goto('https://www.saucedemo.com/');                                                                                                  // opens the website in a browser
        await page.locator('[data-test="username"]').fill(testData.login.standardUser.username);                                                        // locates the username element and enters the test data                                
        await page.locator('[data-test="password"]').fill(testData.login.standardUser.password);                                                        // locates the password element and enters the test data 
        await page.click('#login-button');                                                                                                              // clicks the login button
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();                                                                    // adds the first item to the cart
        await page.locator('[data-test="shopping-cart-link"]').click();                                                                                 // opens the cart
    });

    test('Complete checkout process with valid information', async ({ page }) => {                                                                      // action: complete checkout and input all fields
        await page.locator('[data-test="checkout"]').click();                                                                                           // press the checkout button
        await page.locator('[data-test="firstName"]').fill(testData.checkout.valid.firstName);                                                          // inputs the first name from the test data
        await page.locator('[data-test="lastName"]').fill(testData.checkout.valid.lastName);                                                            // inputs the last name from the test data
        await page.locator('[data-test="postalCode"]').fill(testData.checkout.valid.postalCode);                                                        // inputs the postal code from the test data
        await page.locator('[data-test="continue"]').click();                                                                                           // locates the continue button and clicks it
        await page.locator('[data-test="finish"]').click();                                                                                             // locates the finish button and clicks it to end the process

        await expect(page.locator('[data-test="complete-header"]')).toHaveText(expectedTexts.checkout.success);                                         // the test case is finished once there is the expected text
    });

    test('Checkout validation - missing required fields', async ({ page }) => {                                                                         // action: proceed to checkout with missing information
        await page.locator('[data-test="checkout"]').click();                                                                                           // press the checkout button                           
        await page.locator('[data-test="continue"]').click();                                                                                           // locates the continue button and clicks it

        await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');                                                      // the test case is finished once the error element contains the ff text
    });

    test('Checkout with empty cart', async ({ page }) => {                                                                                              // action: complete checkout with no items in the cart
    await page.locator('[data-test="shopping-cart-link"]').click();                                                                                     // locate the cart icon and click it
    await page.locator('[data-test="checkout"]').click();                                                                                               // press the checkout button                                                                                                              

    const errorLocator = page.locator('[data-test="error"]');                                                                                           // declare the error message as there should be an error when you try to proceed to checkout with no items
                                                                                                                                                        
    if (await errorLocator.isVisible()) {                                                                                                               // using if else to determine whether the error message element exists
        await expect(errorLocator).toContainText(expectedTexts.checkout.empty);                                                                         // if the error message exists, the script expects the ff text
    } else {
        await expect(page).toHaveURL(/checkout-step-one/);                                                                                              // if the page does not have the error message, and allows the user to proceed
        throw new Error('BUG: Allowed to checkout with an empty cart!');                                                                                // generate a bug
    }
    });
});