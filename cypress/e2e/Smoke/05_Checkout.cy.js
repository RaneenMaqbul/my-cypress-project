import HomePage from '../../pages/HomePage';
import CartPage from '../../pages/CartPage';
import ProductsPage from '../../pages/ProductsPage';
import CheckoutPage from '../../pages/CheckoutPage';
import LoginPage from '../../pages/LoginPage';
import SignupPage from '../../pages/SignupPage';
import AccountPage from '../../pages/AccountPage';

describe('Smoke Test - Checkout Flow (POM)', () => {
  const homePage = new HomePage();
  const cartpage = new CartPage();
  const productPages = new ProductsPage();
  const checkout = new CheckoutPage()
  const loginpage = new LoginPage()
  const signupPage = new SignupPage();
  const accountPage = new AccountPage();

  let userData;
  let ordertdata

  before(() => {
    cy.fixture('userData').then((data) => {
      userData = data;
    });
    cy.fixture('OrderData').then((data) => {
      ordertdata = data;
    });
  });

  it('Place Order: Login while Checkout', () => {
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
    // 7. Click Proceed To Checkout
    checkout.ClickInProceedToCheckout()
    //8. Click 'Register / Login' button
    checkout.ClickInRegisterLinkInCheckout()
    //9. Fill all details in Signup and create account
    loginpage.enterValidLoginInfo(userData.ValidEmail, userData.password);
    //10. Click 'login' button
    loginpage.clickLoginButton();
    //11. Click 'View Cart' button
    cartpage.ClickInCartButton()
    //12 Click 'proceed to checkout' button
    checkout.ClickInProceedToCheckout()
    //13 Verify Address Details and Review Your Order
    checkout.VerifyAddressDetails()
    //14. Enter description in comment text area and click 'Place Order'
    checkout.EnterInTextAreaAndClickOnOrder(ordertdata.textArea)
    //15. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    checkout.EnterPaymentDetails(ordertdata.cardName, ordertdata.cardnumber, ordertdata.CVC, ordertdata.expirymonth, ordertdata.expiryear)
    //16. Click 'Pay and Confirm Order' button
    checkout.ClickInPayButton()
    //17. Verify success message 'Your order has been placed successfully!'
    checkout.CheckOrderSucessMessageDisplay()
  });

  it('Place Order: Register before Checkout', () => {
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'    
    homePage.visit();
    //3. Verify that home page is visible successfully
    homePage.verifyHomePage();
    //4. Navigate to Signup/Login
    homePage.clickSignupLogin();
    signupPage.verifySignupSection();
    //5. Enter signup details
    signupPage.enterSignupInfo(userData.name, userData.SignUpemail);
    signupPage.clickSignupButton();

    //6. Fill account and address details
    //7. Fill all details in Signup and create account
    //8. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    //9. Verify ' Logged in as username' at top
    signupPage.verifyAccountInfoSection();
    signupPage.fillAccountInfo(userData);
    signupPage.fillAddressInfo(userData);
    signupPage.submitAccount();
    signupPage.verifyAccountCreated();
    productPages.ClickInFirstAddToCart()
    //10. Click 'View Cart' button
    cartpage.ClickInViewCart()
    checkout.ClickInProceedToCheckout()
    //11. Verify Address Details and Review Your Order
    checkout.VerifyAddressDetails()
    //12. Enter description in comment text area and click 'Place Order'
    checkout.EnterInTextAreaAndClickOnOrder(ordertdata.textArea)
    //13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    checkout.EnterPaymentDetails(ordertdata.cardName, ordertdata.cardnumber, ordertdata.CVC, ordertdata.expirymonth, ordertdata.expiryear)
    //14. Click 'Pay and Confirm Order' button
    checkout.ClickInPayButton()
    //15. Verify success message 'Your order has been placed successfully!'
    checkout.CheckOrderSucessMessageDisplay()
    //16. Delete account
    accountPage.verifyUserLoggedIn(userData.name);
    accountPage.deleteAccount();
    accountPage.verifyAccountDeleted();

  });


  it('Place Order: Login before Checkout', () => {
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'    
    homePage.visit();
    //3. Verify that home page is visible successfully
    homePage.verifyHomePage();
    //4. Navigate to Signup/Login
    homePage.clickSignupLogin();
    loginpage.verifyLoginSection();
    //5. Fill email, password and click 'Login' button
    loginpage.enterValidLoginInfo(userData.ValidEmail, userData.password);
    //6. Click 'login' button
    loginpage.clickLoginButton();
    //7. Verify 'Logged in as username' at top
    accountPage.verifyUserLoggedIn(userData.name);
    //8. Add products to cart
    productPages.ClickInFirstAddToCart()
    //9. Click 'Cart' button
    cartpage.ClickInViewCart()
    //10. Verify that cart page is displayed
    cartpage.CheckViewCartDisplay()
    //11. Click Proceed To Checkout
    checkout.ClickInProceedToCheckout()
    //12 Verify Address Details and Review Your Order
    checkout.VerifyAddressDetails()
    //13. Enter description in comment text area and click 'Place Order'
    checkout.EnterInTextAreaAndClickOnOrder(ordertdata.textArea)
    //14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    checkout.EnterPaymentDetails(ordertdata.cardName, ordertdata.cardnumber, ordertdata.CVC, ordertdata.expirymonth, ordertdata.expiryear)
    //15. Click 'Pay and Confirm Order' button
    checkout.ClickInPayButton()
    //16. Verify success message 'Your order has been placed successfully!'
    checkout.CheckOrderSucessMessageDisplay()
  });


  it('Download Invoice after purchase order', () => {
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'    
    homePage.visit();
    //3. Verify that home page is visible successfully
    homePage.verifyHomePage();
    //4. Navigate to Signup/Login
    homePage.clickSignupLogin();
    signupPage.verifySignupSection();

    //5. Enter signup details
    signupPage.enterSignupInfo(userData.name, userData.SignUpemail);
    signupPage.clickSignupButton();

    //6. Fill account and address details
    //7. Fill all details in Signup and create account
    //8. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    //9. Verify ' Logged in as username' at top

    signupPage.verifyAccountInfoSection();
    signupPage.fillAccountInfo(userData);
    signupPage.fillAddressInfo(userData);
    signupPage.submitAccount();
    signupPage.verifyAccountCreated();

    productPages.ClickInFirstAddToCart()
    //10. Click 'View Cart' button
    cartpage.ClickInViewCart()
    checkout.ClickInProceedToCheckout()

    //11 Verify Address Details and Review Your Order
    checkout.VerifyAddressDetails()
    //12. Enter description in comment text area and click 'Place Order'
    checkout.EnterInTextAreaAndClickOnOrder(ordertdata.textArea)
    //13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    checkout.EnterPaymentDetails(ordertdata.cardName, ordertdata.cardnumber, ordertdata.CVC, ordertdata.expirymonth, ordertdata.expiryear)
    //14. Click 'Pay and Confirm Order' button
    checkout.ClickInPayButton()
    //15. Verify success message 'Your order has been placed successfully!'
    checkout.CheckOrderSucessMessageDisplay()
    //16. Click in Download Inovice
    checkout.ClickInDownloadInovice()
    //17. Delete account
    accountPage.verifyUserLoggedIn(userData.name);
    accountPage.deleteAccount();
    accountPage.verifyAccountDeleted();


  });


  it('Verify address details in checkout page', () => {
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'    
    homePage.visit();
    //3. Verify that home page is visible successfully
    homePage.verifyHomePage();
    //4. Click 'Signup / Login' button
    homePage.clickSignupLogin();
    //5. Fill all details in Signup and create account
    signupPage.verifySignupSection();
    signupPage.enterSignupInfo(userData.name, userData.SignUpemail);
    signupPage.clickSignupButton();
    signupPage.verifyAccountInfoSection();
    signupPage.fillAccountInfo(userData);
    signupPage.fillAddressInfo(userData);
    signupPage.submitAccount();
    //6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    signupPage.verifyAccountCreated();

    //7. Add products to cart
    productPages.ClickInFirstAddToCart()
    //8. Click 'Cart' button
    cartpage.ClickInViewCart()
    //9. Verify that cart page is displayed

    cartpage.CheckViewCartDisplay()
    //10. Click Proceed To Checkout
    checkout.ClickInProceedToCheckout()
    //11. Verify Delivery Address matches registration data
    //12.  Verify Billing Address matches registration data
    checkout.VerifyAddressBillingAndDeliveryAddress(userData.name, userData.company, userData.address1, userData.city)

    //13. Delete account
    accountPage.verifyUserLoggedIn(userData.name);
    accountPage.deleteAccount();
    accountPage.verifyAccountDeleted();


  });



});