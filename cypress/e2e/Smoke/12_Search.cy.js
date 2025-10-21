import HomePage from '../../pages/HomePage';
import SearchPage from '../../pages/SearchPage';
import ProductsPage from '../../pages/ProductsPage';
import CartPage from '../../pages/CartPage';
import LoginPage from '../../pages/LoginPage';


describe('Smoke Test -  Verify search Product POM', () => {
  const homePage = new HomePage();
  const searchPage = new SearchPage();
  const productPages = new ProductsPage();
  const cartpage = new CartPage();
  const loginPage = new LoginPage();

  let productdata
  let userData
  before(() => {
    cy.fixture('ProductsData').then((data) => {
      productdata = data;
    });
    cy.fixture('UserData').then((data) => {
      userData = data;
    });
  });
  it('Verify Search Product', () => {
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
    searchPage.Visit()
    //3. Verify that home page is visible successfully
    homePage.verifyHomePage()
    //4. Click on 'Products' button
    productPages.clickProductLink()
    //5.Verify user is navigated to ALL PRODUCTS page successfully
    productPages.VerifyNavigatedToAllProducts()
    //6. Enter product name in search input and click search button
    searchPage.EnterProductNameInSearchBox(productdata.ProductName)
    //7. Verify 'SEARCHED PRODUCTS' is visible
    searchPage.VerifySearchProductsVisible()
    //8. Verify all the products related to search are visible
    searchPage.VerifySearchResultRelated(productdata.ProductName)
  });

  it('Search Products and Verify Cart After Login', () => {
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
    searchPage.Visit()
    //3. Click on 'Products' button
    productPages.clickProductLink()
    //4. Verify user is navigated to ALL PRODUCTS page successfully
    productPages.VerifyNavigatedToAllProducts()
    //5. Enter product name in search input and click search button
    searchPage.EnterProductNameInSearchBox(productdata.ProductName)
    //6. Verify 'SEARCHED PRODUCTS' is visible
    searchPage.VerifySearchProductsVisible()
    //7. Verify all the products related to search are visible
    searchPage.VerifySearchResultRelated(productdata.ProductName)
    //8. Add products to cart
    productPages.ClickInFirstAddToCart()
    //9. Click 'Cart' button and verify that products are visible in cart
    cartpage.ClickInViewCart()
    productPages.VerifyProductListAvilable()
    //10. Click 'Signup / Login' button and submit login details
    homePage.clickSignupLogin();
    loginPage.verifyLoginSection();
    loginPage.enterValidLoginInfo(userData.ValidEmail, userData.password);
    loginPage.clickLoginButton();
    //11. Again, go to Cart page
    cartpage.ClickInCartButton()
    //12. Verify that those products are visible in cart after login as well
    productPages.VerifyProductListAvilable()

  });



});
