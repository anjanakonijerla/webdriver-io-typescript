import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OrdersPage extends Page {
    /**
     * define selectors using getter methods
     */

    get proceedToCheckout () { return $('//span[text()="Proceed to checkout"]')}
    get checkBoxAgreeAlert () { return $('intput[id="cgv"]')}
    get orderPageAlert(){ return $('h1[id="cart_title"]') }
    get orderTable(){ return $('table[id="cart_summary"]') }
    
      
    async proceed () {
        console.log("Clicking on proceedToCheckout")
        var ele = this.proceedToCheckout
        await ele.scrollIntoView();
        await ele.moveTo();
        await ele.click
        console.log("Clicked on proceedToCheckout")
    }
    async checkBoxAgree () {
        await this.checkBoxAgreeAlert.click
    }


    
    /**
     * overwrite specifc options to adapt it to page object
     */
    
}

export default new OrdersPage();
