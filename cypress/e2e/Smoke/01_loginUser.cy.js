import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import AccountPage from '../../pages/AccountPage';


describe('Smoke Test - Login User Flow (POM)', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const accountPage = new AccountPage();

  let userData;

  before(() => {
    cy.fixture('userData').then((data) => {
      userData = data;
    });
  });

  it('Login User with correct email and password', () => {
    // Step 1,2,3: Launch & Naviage & Verify Home Page
    homePage.visit();
    homePage.verifyHomePage();
    // Step 4: Navigate to Signup/Login
    homePage.clickSignupLogin();
    //Step 5: Verify 'Login to your account' is visible
    loginPage.verifyLoginSection();
    //Step 6. Enter correct email address and password
    loginPage.enterValidLoginInfo(userData.ValidEmail, userData.password);
    //Step 7. Click 'login' button
    loginPage.clickLoginButton();
    //Step 8. Verify that 'Logged in as username' is visible
    accountPage.verifyUserLoggedIn(userData.name);


  });


  it('Login User with incorrect email and password', () => {
    // Step 1,2,3: Launch & Naviage & Verify Home Page
    homePage.visit();
    homePage.verifyHomePage();
    // Step 4: Navigate to Signup/Login
    homePage.clickSignupLogin();
    //Step 5: Verify 'Login to your account' is visible
    loginPage.verifyLoginSection();
    //Step 6: Enter incorrect email address and password
    loginPage.enterInValidLoginInfo(userData.InValidEmail, userData.password);
    //Step 7. Click 'login' button
    loginPage.clickLoginButton()
    //Step 8. Verify error 'Your email or password is incorrect!' is visible
    loginPage.verifyErrorMessage()


  });
});
