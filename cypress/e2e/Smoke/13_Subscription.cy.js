import HomePage from '../../pages/HomePage';



describe('Smoke Test -  Verify Subscription process', () => {
  const homePage = new HomePage();

  let userdata
  before(() => {
    cy.fixture('UserData').then((data) => {
      userdata = data;
    });
  });
  it('Verify Subscription in home page', () => {
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
    homePage.visit()
    //3. Verify that home page is visible successfully
    homePage.verifyHomePage()
    //4. Scroll down to footer
    //5. Verify text 'SUBSCRIPTION'
    homePage.ScrollDownToFooter()
    homePage.SubscribeProcess(userdata.ValidEmail)
    homePage.VerifySuccessSubscribeMSG()
  });



});
