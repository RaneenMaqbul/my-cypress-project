class SignupPage {

  // ----------------------------
  // Locators Section
  // ----------------------------
  elements = {
    signupHeader: () => cy.get('.signup-form h2'),
    signupName: () => cy.get('[data-qa="signup-name"]'),
    signupEmail: () => cy.get('[data-qa="signup-email"]'),
    signupButton: () => cy.get('[data-qa="signup-button"]'),
    genderFemale: () => cy.get('#id_gender2'),
    password: () => cy.get('#password'),
    daySelect: () => cy.get('#days'),
    monthSelect: () => cy.get('#months'),
    yearSelect: () => cy.get('#years'),
    newsletter: () => cy.get('#newsletter'),
    optin: () => cy.get('#optin'),
    createAccount: () => cy.get('[data-qa="create-account"]'),
    continueButton: () => cy.get('[data-qa="continue-button"]'),
    ErrorMessage: () => cy.contains('Email Address already exist!')
  };

  // ----------------------------
  // Methods Section
  // ----------------------------

  verifySignupSection() {
    this.elements.signupHeader().should('contain', 'New User Signup!');
  }

  enterSignupInfo(name, email) {
    this.elements.signupName().type(name);
    this.elements.signupEmail().type(email);
  }

  clickSignupButton() {
    this.elements.signupButton().click();
  }

  verifyAccountInfoSection() {
    cy.contains('Enter Account Information').should('be.visible');
  }

  fillAccountInfo(user) {
    this.elements.genderFemale().check();
    this.elements.password().type(user.password);
    this.elements.daySelect().select('1');
    this.elements.monthSelect().select('January');
    this.elements.yearSelect().select('1997');
    this.elements.newsletter().check();
    this.elements.optin().check();
  }

  fillAddressInfo(user) {
    cy.get('#first_name').type(user.firstName);
    cy.get('#last_name').type(user.lastName);
    cy.get('#company').type(user.company);
    cy.get('#address1').type(user.address1);
    cy.get('#address2').type(user.address2);
    cy.get('#country').select(user.country);
    cy.get('#state').type(user.state);
    cy.get('#city').type(user.city);
    cy.get('#zipcode').type(user.zipcode);
    cy.get('#mobile_number').type(user.mobile);
  }

  submitAccount() {
    this.elements.createAccount().click();
  }

  verifyAccountCreated() {
    cy.contains('Account Created!').should('be.visible');
    this.elements.continueButton().click();
  }

  VerifyErrorMessage() {
    this.elements.ErrorMessage().should('be.visible')
  }
}

export default SignupPage;