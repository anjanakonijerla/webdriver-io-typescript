import { Given, When, Then } from '@wdio/cucumber-framework';

import SignUpPage from '../pageobjects/signup.page';

import SecurePage from '../pageobjects/secure.page';

import LoginPage from '../pageobjects/login.page';

import Page from '../pageobjects/page';

Given(/^The Home page is loaded$/, async () => {
    await SignUpPage.open()
});

When(/^I clicked on Signin link$/, async () => {
    SignUpPage.clickSignInLink()
});


When(/^I signin with (.*) and (.*) with (.*) and (.*)$/, async (email,password,firstname,lastname) => {
    await SignUpPage.signin(email)
    await expect(SignUpPage.FormAlert).toBeExisting();
    await expect(SignUpPage.emailAlert).toBeExisting();
    await expect(SignUpPage.emailAlert).toHaveValue(email);
    await SignUpPage.fillForm(password,firstname,lastname)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Then(/^I Logout from application/, async () => {
    await SignUpPage.logout()

    await expect(SecurePage.logOutAlert).toBeExisting();
});

