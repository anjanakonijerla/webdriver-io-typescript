import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OrdersPage extends Page {
    /**
     * define selectors using getter methods
     */

   
   
    get proceedTocheckout () { return $('#Proceed to checkout')}
   
   
    async goToPayments () {
        await this.proceedTocheckout.click

    }


    

    /**
     * overwrite specifc options to adapt it to page object
     */
    
}

export default new OrdersPage();
