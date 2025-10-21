import HomePage from '../../pages/HomePage';



describe('Smoke Test -  Verify Scroll Test POM', () => {
  const homePage = new HomePage();



  it('Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
  homePage.visit() 
//3. Verify that home page is visible successfully
    homePage.verifyHomePage();
//4. Scroll down page to bottom
//5. Verify 'SUBSCRIPTION' is visible
    homePage.ScrollDownToFooter()
//6. Click on arrow at bottom right side to move upward
    homePage.ClickInScrollUpArrow()
//7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
    homePage.CheckTitleVisibleAfterScrollUp()
  });
  it('Verify Scroll Up without Arrow button and Scroll Down functionality', () => {
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
  homePage.visit() 
//3. Verify that home page is visible successfully
    homePage.verifyHomePage();
//4. Scroll down page to bottom
//5. Verify 'SUBSCRIPTION' is visible
    homePage.ScrollDownToFooter()
//6. Scroll up page to top
    homePage.ClickInScrollUp()
//7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
    homePage.CheckTitleVisibleAfterScrollUp()
  });


});
