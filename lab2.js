class User {

    constructor(name, password) {
        this.name = name;
        this.password = password
        this.cart = []
    }

    /**
     * Adds a product to the cart array.
     * @param {Object} product - product object to be add to cart. 
     * @param {string} product.name - name of the product
     * @param {number} product.price - price of the product
     */
    // test this function's logic 
    addToCart(product) {
        this.cart.push(product)
    }



    /**
     * retruns the cart array total price. 
     */
    // test this function's logic 
    calculateTotalCartPrice() {
        return this.cart.reduce((accPrice, prd) => accPrice + prd.price, 0)
    }

    /**
     * Creates order with products in cart and does the payment proccess and return wethear the payament process's done successfully or not.
     * @param {object} paymentModel object has the payment proccess    
    * @param {function} paymentModel.goToVerifyPage opens a new page to verfiy the payament info.
    * @param {function} paymentModel.returnBack retruns back after verfiy the payament info.
    * @param {function} paymentModel.isVerify indecates wethear the payament info is valid or not. 
    */
    /* These are test cases for checkout function:
    1- paymentModel methods should be called
    2- should retrun true if the payment is verified
     */
    checkout(paymentModel) {
        paymentModel.goToVerifyPage()
        paymentModel.returnBack()
        if (paymentModel.isVerify()) {
            return true
        }
        else return false
    }
}

module.exports=User