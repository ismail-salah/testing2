const User=require('../../lab2');

describe('User',  () => {
  let user;
  beforeEach(() => {
    user = new User('MB', 'pass');
  });

  it('should add a product to the cart', () => {
    const product = { name: 'Product 1', price: 10 };
    user.addToCart(product);
    expect(user.cart).toContain(product);
  });
  it('should calculate the total cart price', () => {
    const product1 = { name: 'Product 1', price: 10 };
    const product2 = { name: 'Product 2', price: 20 };
    user.addToCart(product1);
    user.addToCart(product2);
    expect(user.calculateTotalCartPrice()).toEqual(30);
  });

  describe('checkout', () => {
    let paymentModel;

    beforeEach(() => {
      paymentModel = jasmine.createSpyObj('paymentModel', ['goToVerifyPage', 'returnBack', 'isVerify']);
      paymentModel.isVerify.and.returnValue(true);
    });
    
    it('should call paymentModel methods and return true if payment is verified', () => {
      expect(user.checkout(paymentModel)).toBe(true);
      expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
      expect(paymentModel.returnBack).toHaveBeenCalled();
      expect(paymentModel.isVerify).toHaveBeenCalled();
    });

    it('should return false if payment is not verified', () => {
      paymentModel.isVerify.and.returnValue(false);
      expect(user.checkout(paymentModel)).toBe(false);
    });
  });
});