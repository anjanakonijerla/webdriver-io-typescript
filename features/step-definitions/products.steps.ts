import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import ProductPage from '../pageobjects/product.page';
import OrdersPage from '../pageobjects/product.page';




Then(/^I search for the (.*)$/, async (product) => {

    await ProductPage.searchQuery(product)
  
});

Then(/^I add (.*) of (.*) to the cart of (.*)$/, async (quantity,product,size) => {
    await ProductPage.addTocart(quantity,product,size)
    await expect(SecurePage.confirmAlert).toBeExisting();
    await expect(SecurePage.confirmAlert).toHaveTextContaining("Product successfully added to your shopping cart");
    await ProductPage.closeConfirmWindow()
});

Then(/^And I proceed to cart and checkout and then payments page$/, async () => {
    await ProductPage.goTocart()
    await expect(SecurePage.orderPageAlert).toBeExisting();
    await expect(SecurePage.orderPageAlert).toHaveTextContaining("SHOPPING-CART SUMMARY");
    // await OrdersPage.goToPayments()
});


Then(/^I validate products in cart $/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});


