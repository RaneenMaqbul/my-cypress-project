import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import AccountPage from '../../pages/AccountPage';
import LogoutPage from '../../pages/LogoutPage';

describe('Smoke Test - Logout User Flow (POM)', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const accountPage = new AccountPage();
  const logoutPage = new LogoutPage();

  let userData;

  before(() => {
    cy.fixture('userData').then((data) => {
      userData = data;
    });
  });

  it('Verify user can successfully log out', () => {
    cy.log('🔹 Launching the home page and verifying UI elements');
    homePage.visit();
    homePage.verifyHomePage();

    cy.log('🔹 Navigating to Login page');
    homePage.clickSignupLogin();
    loginPage.verifyLoginSection();

    cy.log('🔹 Logging in with valid credentials');
    loginPage.enterValidLoginInfo(userData.ValidEmail, userData.password);
    loginPage.clickLoginButton();
    accountPage.verifyUserLoggedIn(userData.name);

    cy.log('🔹 Logging out');
    logoutPage.clickLogout();

    cy.log('🔹 Verifying user is navigated to Login page');
    loginPage.verifyLoginSection();
  });
});