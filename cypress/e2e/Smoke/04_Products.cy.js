import HomePage from '../../pages/HomePage';

import ProductsPage from '../../pages/ProductsPage';


describe('Smoke Test -  Verify products and products details page POM', () => {
  const homePage = new HomePage();
  const productsPage  = new ProductsPage();

  it('Verify All Products and product detail page ', () => {
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
    homePage.visit();
    //3. Verify that home page is visible successfully
    homePage.verifyHomePage();
    //4. Click on 'Products' button
    productsPage.clickProductLink()
    //5. Verify user is navigated to ALL PRODUCTS page successfully
    productsPage.VerifyNavigatedToAllProducts()
    //6. The products list is visible
    productsPage.VerifyProductListAvilable()
    //7. Click on 'View Product' of first product
    productsPage.ClickViewProductLink()
    //8. User is landed to product detail page
    productsPage.VerifyNavigatedToProductsDetailPage()
    //9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
    productsPage.ValidateProductInfo()
  });



});
