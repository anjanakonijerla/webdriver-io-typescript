import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () { return $('input[id="email_create"]') }
   
    get btnSubmit () { return $('button[id="SubmitCreate"]')}
    get rdioBtn () { return $('input[id="id_gender1"]')}
    get inputFirstName () { return $('input[id="customer_firstname"]') }
    get inputLastName () { return $('input[id="customer_lastname"]') }
    get inputPassword () { return $('input[id="passwd"]') }
    get selectDate () { return $('#days') }
    get selectMonth () { return $('#months') }
    get selectYear () { return $('#years') }
  

    get inputFN() { return $('input[id="firstname"]') }
    get inputLN () { return $('input[id="lastname"]') }
    get inputAddress () { return $('input[id="address1"]') }
    get inputCity () { return $('input[id="city"]') }
    get inputState () { return $('#id_state') }
    get inputZip () { return $('input[id="postcode"]') }
    get selectCountry () { return $('#id_country') }
    get inputMobile () { return $('input[id="phone_mobile"]') }
    get inputAlias () { return $('input[id="alias"]') }
    get btnSubmitAcc () { return $('button[id="submitAccount"]')}

    get signIn () {  return $('a.login') }
    get logOut () {  return $('a.logout') }

    get emailAlert () { return $('#email') }
    get FormAlert () { return $('#account-creation_form') }



    async clickSignInLink() {
        await this.signIn.click();
    }

    async logout () {
        await this.logOut.click();
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async signin (email: string) {
        await this.inputEmail.setValue(email);
        await this.btnSubmit.click();
    }
    async fillForm (password: string,firstname: string,lastname: string) {


        await this.rdioBtn.click();
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputPassword.setValue(password);
        await this.selectDate.selectByAttribute('value','3')
        await this.selectMonth.selectByAttribute('value','3')
        await this.selectYear.selectByAttribute('value','2019')
        await this.inputFN.setValue("werwer");
        await this.inputLN.setValue("vbbvbnvn");
        await this.inputAddress.setValue("Victoria");
        await this.inputCity.setValue("melbourne");
        await this.inputState.selectByVisibleText('New York')
        await this.inputZip.setValue("22222");
        await this.selectCountry.selectByVisibleText('United States')
        await this.inputMobile.setValue("1234567");
        await this.inputAlias.setValue("My address test");
        await this.btnSubmitAcc.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('index.php');
    }
}

export default new SignUpPage();
