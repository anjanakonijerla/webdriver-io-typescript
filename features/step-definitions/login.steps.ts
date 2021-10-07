import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';



When(/^I login with (.*) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a account name saying (.*)$/, async (name) => {
    await expect(SecurePage.accountAlert).toBeExisting();
    await expect(SecurePage.accountAlert).toHaveTextContaining(name);
});

