import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import ProductPage from '../pageobjects/product.page';
import OrdersPage from '../pageobjects/order.page';




Then(/^I search for the (.*)$/, async (product) => {
     await ProductPage.searchQuery(product)
});

Then(/^I add (.*) of (.*) to the cart of (.*)$/, async (quantity, product, size) => {
    await ProductPage.addTocart(quantity, product, size)
    await expect(SecurePage.confirmAlert).toBeExisting();
    await expect(SecurePage.confirmAlert).toHaveTextContaining("Product successfully added to your shopping cart");
    await ProductPage.closeConfirmWindow()
});


Then(/^I proceed to cart and checkout and then payments page$/, async () => {
  

    await ProductPage.goTocart()
    await expect(OrdersPage.orderPageAlert).toBeExisting();
    await expect(OrdersPage.orderPageAlert).toHaveTextContaining("SHOPPING-CART SUMMARY");
    await expect(OrdersPage.proceedToCheckout).toBeExisting();
   
    await OrdersPage.proceed()
    await expect(OrdersPage.orderPageAlert).toBeExisting();
    await expect(OrdersPage.orderPageAlert).toHaveTextContaining("Addresses");
    await expect(OrdersPage.proceedToCheckout).toBeExisting();
  
    await OrdersPage.proceed()
    await expect(OrdersPage.orderPageAlert).toBeExisting();
    await expect(OrdersPage.orderPageAlert).toHaveTextContaining("Shipping");
    await expect(OrdersPage.proceedToCheckout).toBeExisting();
    await expect(OrdersPage.checkBoxAgreeAlert).toBeExisting();
    await OrdersPage.checkBoxAgree()
  

    await OrdersPage.proceed()
    await expect(OrdersPage.orderPageAlert).toBeExisting();
    await expect(OrdersPage.orderPageAlert).toHaveTextContaining("PLEASE CHOOSE YOUR PAYMENT METHOD");
});


Then(/^I should have products in payments page (.*) and (.*)$/, async (product,quantity) => {
    // await ProductPage.searchQuery(product,quantity)
});