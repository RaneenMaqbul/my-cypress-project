import HomePage from '../../pages/HomePage';

import ContactusPage from '../../pages/contactusPage';

describe('Smoke Test - Contact Us Flow (POM)', () => {
  const homePage = new HomePage();
  const contactusPage = new ContactusPage();

  let userData;

  before(() => {
    cy.fixture('userData').then((data) => {
      userData = data;
    });
  });

  it('Contact us Flow', () => {
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'    
    homePage.visit();
    //3. Verify that home page is visible successfully
    homePage.verifyHomePage();
    //4. Click on 'Contact Us' button
    contactusPage.ClickInContactUsLink();
    //5. Verify 'GET IN TOUCH' is visible
    contactusPage.VerifyGetInTouchVisible();
    //6. Enter name, email, subject and message
    contactusPage.FillContactUsInfo(userData.name, userData.ValidEmail, userData.subject, userData.message)
    //7. Upload file
    contactusPage.uploadFile('cypress/fixtures/ContactFile.txt');
    //8. Click Submit Button
    contactusPage.ClickSubmitButton()
    //09. Verify success message 'Success! Your details have been submitted successfully.' is visible
    contactusPage.VerifySucessMessage()
    //10. Click 'Home' button and verify that landed to home page successfully
    contactusPage.clickHomeButton()
  });



});

