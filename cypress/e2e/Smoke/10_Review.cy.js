import HomePage from '../../pages/HomePage';
import ProductsPage from '../../pages/ProductsPage';
import ReviewPage from '../../pages/ReviewPage';



describe('Smoke Test -  Verify Review Products POM', () => {
  const homePage = new HomePage();
  const productPages = new ProductsPage();
  const reviewpage = new ReviewPage();

  let userdata
  let reviewdata
  before(() => {
    cy.fixture('UserData').then((data) => {
      userdata = data;
    });
    cy.fixture('ReviewData').then((data) => {
      reviewdata = data;
    });
  });
  it('Add review on product', () => {
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
    homePage.visit()
    //3. Click on 'Products' button
    productPages.clickProductLink()
    //4. Verify user is navigated to ALL PRODUCTS page successfully
    productPages.VerifyNavigatedToAllProducts()
    //5. Click on 'View Product' button
    productPages.ClickInViewProductButton()
    //6. Verify 'Write Your Review' is visible
    reviewpage.VerifyReviewLink()
    //7. Enter name, email and review
    reviewpage.FillReviewInfo(reviewdata.name, reviewdata.email, reviewdata.ReviewText)
    //8. Click Submit
    reviewpage.ClickInSubmitButton()
    //9. Verify success message 'Thank you for your review.'
    reviewpage.VerifySucessMessageforsubmitReview()
  });



});
