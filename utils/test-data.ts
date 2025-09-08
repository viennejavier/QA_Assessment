export const testData = {
  login: {
    standardUser: {
      username: 'standard_user',
      password: 'secret_sauce',
    },
    invalidUser: {
      username: 'invalid_user',
      password: 'wrong_password',
    },
  },
  checkout: {
    valid: {
      firstName: 'Test',
      lastName: 'User',
      postalCode: '12345',
    },
    invalid: {
      firstName: '',
      lastName: '',
      postalCode: '',
    },
  },
};

export const expectedTexts = {
  loginPage: {
    title: 'Swag Labs',
    error: 'Epic sadface: Username and password do not match',
  },
  productsPage: {
    title: 'Products',
  },
  cartPage: {
    title: 'Your Cart',
  },
  checkout: {
    stepOne: 'Checkout: Your Information',
    stepTwo: 'Checkout: Overview',
    complete: 'Checkout: Complete!',
    success: 'Thank you for your order!',
    empty: 'Your cart is empty'
  },
};