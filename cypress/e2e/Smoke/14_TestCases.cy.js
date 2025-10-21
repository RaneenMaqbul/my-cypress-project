import HomePage from '../../pages/HomePage';

import TestcasesPage from '../../pages/TestcasesPage';

describe('Smoke Test - TestCases Page (POM)', () => {
  const homePage = new HomePage();
 const testCases = new TestcasesPage();

  let userData;

  before(() => {
    cy.fixture('userData').then((data) => {
      userData = data;
    });
  });

  it('Verify Test Cases Page', () => {
//1. Launch browser
//2. Navigate to url 'http://automationexercise.com'    
    homePage.visit();
//3. Verify that home page is visible successfully
    homePage.verifyHomePage();
//4. Click on 'Test Cases' button
   testCases.ClickInTestCasesLink();
 //5. Verify user is navigated to test cases page successfully
 testCases.VerifyTestCasesPage()
});



});

