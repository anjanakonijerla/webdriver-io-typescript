import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('p.info-account') }
    get logOutAlert () { return $('a.login') }
    get confirmAlert () { return $('#layer_cart') }
    get orderPageAlert(){ return $('#cart_title') }
    get accountAlert () { return $('a.account') }
}

export default new SecurePage();
