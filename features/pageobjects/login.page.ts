import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get signIn () {  return $('a.login') }
    get inputEmail () { return $('#email') }
    get inputPassword () { return $('#passwd') }
    get btnSubmit () { return $('button[id="SubmitLogin"]')}



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username: string, password: string) {
        await this.signIn.click();

        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
      
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('index.php');
    }
}

export default new LoginPage();
