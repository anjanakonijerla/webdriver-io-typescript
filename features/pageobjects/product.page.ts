import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */

    private pdName: string;
    //-----------------------
    get inputSearchQuery () { return $('input[id="search_query_top"]') }
    get btnSubmitSearch () { return $('button[name="submit_search"]')}

    get listOfProducts () { return $('a[title=\"'+this.pdName+'\"]')}
    get inputQuantity () { return $('input[id="quantity_wanted"]') }
    get selectSize () { return $('#group_1') }
    get btnSubmitAddToCart () { return $('#add_to_cart')}
    get GoToCart () { return $('#View my shopping cart')}
    get closeWindow() { return $('span[title="Close window"]')}
   
    async searchQuery (product: string) {
        await this.inputSearchQuery.clearValue

        await this.inputSearchQuery.setValue(product);

    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     * 
     * 
     */
    async addTocart (quantity: string,product: string,size: string) {
    
        await this.btnSubmitSearch.click();
        this.pdName = product;
        console.log("Hey Anjana : product-->" + product + ", size-->"+size+", quantity-->"+quantity);
        await this.listOfProducts.click();
        await this.inputQuantity.setValue(quantity);
        await this.selectSize.selectByVisibleText(size)
        await this.btnSubmitAddToCart.click();


    }

    async goTocart () {
        await this.GoToCart.click();
    }

    async closeConfirmWindow () {
        await this.closeWindow.click();
    }


    /**
     * overwrite specifc options to adapt it to page object
     */
    
}

export default new ProductPage();
