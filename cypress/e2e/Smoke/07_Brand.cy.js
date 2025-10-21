import HomePage from '../../pages/HomePage';
import CategoryPage from '../../pages/CategoryPage';
import ProductsPage from '../../pages/ProductsPage';
import BrandPage from '../../pages/BrandPage';


describe('Smoke Test - Brand Flow (POM)', () => {
  const homePage = new HomePage();
  const categorypage = new CategoryPage();
  const productPages = new ProductsPage();
  const brandpage = new BrandPage();

  let userData;

  before(() => {
    cy.fixture('userData').then((data) => {
      userData = data;
    });
  });

  it('View & Cart Brand Products', () => {
    // 1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
    homePage.visit();
    //3.Click on 'Products' button
    productPages.clickProductLink()
    //4. Verify that Brands are visible on left side bar
    brandpage.VerifyBrandLinkVisible()
    //5. Click on any brand name
    brandpage.ClickInBrandPolo()
    //6. Verify that user is navigated to brand page and brand products are displayed
    brandpage.VerifyBrandProductsDisplayed()
    //7. On left side bar, click on any other brand link
    brandpage.ClickInSecondBrand()
    //8. Verify that user is navigated to that brand page and can see products
    brandpage.VerifyBrandTwoProductsDisplayed()
  });



});

