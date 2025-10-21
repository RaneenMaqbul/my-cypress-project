import HomePage from '../../pages/HomePage';
import SignupPage from '../../pages/SignupPage';
import AccountPage from '../../pages/AccountPage';

describe('Smoke Test - Register User Flow (POM)', () => {
  const homePage = new HomePage();
  const signupPage = new SignupPage();
  const accountPage = new AccountPage();

  let userData;

  before(() => {
    cy.fixture('userData').then((data) => {
      userData = data;
    });
  });

  it('Should register and delete user successfully', () => {
    // Step 1: Launch & Verify Home Page
    homePage.visit();
    homePage.verifyHomePage();

    // Step 2: Navigate to Signup/Login
    homePage.clickSignupLogin();
    signupPage.verifySignupSection();

    // Step 3: Enter signup details
    signupPage.enterSignupInfo(userData.name, userData.SignUpemail);
    signupPage.clickSignupButton();

    // Step 4: Fill account and address details
    signupPage.verifyAccountInfoSection();
    signupPage.fillAccountInfo(userData);
    signupPage.fillAddressInfo(userData);
    signupPage.submitAccount();
    signupPage.verifyAccountCreated();

    // Step 5: Verify login and delete account
    accountPage.verifyUserLoggedIn(userData.name);
    accountPage.deleteAccount();
    accountPage.verifyAccountDeleted();
  });

  
  it('Register User with existing email', () => {
    // Step 1: & Step 2 & step 3:  Launch & Verify Home Page
    homePage.visit();
    homePage.verifyHomePage();
    // Step 4: Click on 'Signup / Login' button
    homePage.clickSignupLogin();
   //Step  5. Verify 'New User Signup!' is visible
    signupPage.verifySignupSection();
    // Step 6: Enter signup details
    signupPage.enterSignupInfo(userData.name, userData.ValidEmail);
    //Step 7: Click 'Signup' button
    signupPage.clickSignupButton();
    //Step 8:  Verify error 'Email Address already exist!' is visible
    

   
  });


});
