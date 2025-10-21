import HomePage from '../../pages/HomePage';
import CartPage from '../../pages/CartPage';
import ProductsPage from '../../pages/ProductsPage';
import CheckoutPage from '../../pages/CheckoutPage';

describe('Smoke Test - Cart Page Flow (POM)', () => {
  const homePage = new HomePage();
  const cartpage = new CartPage();
  const productPages = new ProductsPage();
  const checkout = new CheckoutPage()

  let userData;

  before(() => {
    cy.fixture('userData').then((data) => {
      userData = data;
    });
  });

  it('Verify Subscription in Cart page', () => {
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'    
    homePage.visit();
    //3. Verify that home page is visible successfully
    homePage.verifyHomePage();
    //4. Click on 'cart' button
    cartpage.ClickInCartButton()
    //5. Verify text 'SUBSCRIPTION'
    homePage.ScrollDownToFooter()
    //6. Enter email address in input and click arrow button
    homePage.SubscribeProcess(userData.ValidEmail)
    //7. Verify success message 'You have been successfully subscribed!' is visible
    homePage.VerifySuccessSubscribeMSG()

  });
  it('Add products in Cart', () => {
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'    
    homePage.visit();
    //3. Verify that home page is visible successfully
    homePage.verifyHomePage();
    //4. Click on 'Products' button
    productPages.clickProductLink()
    //5. Hover over first product and click 'Add to cart'
    productPages.ClickInFirstAddToCart()
    productPages.VerifySucessAddToCartMessage()
    //6. Click 'Continue Shopping' button
    cartpage.ClickInContinueShoppingButton()
    //7. Hover over second product and click 'Add to cart'
    productPages.ClickInSecondAddToCart()
    //8. Click 'View Cart' button
    cartpage.ClickInViewCart()
    //9. Verify both products are added to Cart
    cartpage.VerifyBothProductsAreAddedToCart()
    //10. Verify their prices, quantity and total price
    cartpage.VerifyCartInfo()
  });
  it('Verify products Quantity in Cart', () => {
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'    
    homePage.visit();
    //3. Verify that home page is visible successfully
    homePage.verifyHomePage();
    //4. Click 'View Product' for any product on home page
    productPages.ClickViewProductLink()
    //5. Verify product detail is opened
    productPages.VerifyNavigatedToProductsDetailPage()
    //6. Increase quantity to 4
    cartpage.LogQuantity()
    //7. Click 'Add to cart' button
    cartpage.ClickAddToCart()
    //8. Click 'View Cart' button
    cartpage.ClickInViewCart()
    //9. Verify that product is displayed in cart page with exact quantity
    cartpage.CheckQuantityInCart()
    //10. Click Proceed To Checkout
    checkout.ClickInProceedToCheckout()
  });

  it('Remove products from Cart', () => {
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'    
    homePage.visit();
    //3. Verify that home page is visible successfully
    homePage.verifyHomePage();
    //4. Add products to cart
    productPages.ClickInFirstAddToCart()
    //5. Click 'Cart' button
    cartpage.ClickInViewCart()
    //6. Verify that cart page is displayed
    cartpage.CheckViewCartDisplay()
    //7. Click 'X' button corresponding to particular product
    cartpage.RemoveCartButton();
    //8. Verify that product is removed from the cart
    cartpage.VerifyRemoveCartValidationMessage()
  });

  it('Add products from recomended item', () => {
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'    
    homePage.visit();
    //3. Verify that home page is visible successfully
    homePage.verifyHomePage();
    //4. Verify 'RECOMMENDED ITEMS' are visible
    homePage.VerifyRecomendedItem()
    //5. Click on 'Add To Cart' on Recommended product
    homePage.ClickInAddToCartRecomendedItem()
    //6. Click on 'View Cart' button
    cartpage.ClickInViewCart()
    //7. Verify that product is displayed in cart page
    cartpage.VerifyCartInfo()

  });
});

