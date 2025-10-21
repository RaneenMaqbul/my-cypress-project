class LoginPage {

  // ----------------------------
  // Locators Section
  // ----------------------------
  elements = {
    LoginHeader: () => cy.get('.login-form h2'),
    EmailAddress: () => cy.get('[data-qa="login-email"]'),
    Password: () => cy.get('[data-qa="login-password"]'),
    LoginButton: () => cy.get('[data-qa="login-button"]'),
    ErrorMessage: () => cy.contains('Your email or password is incorrect!')

  }


  // ----------------------------
  // Methods Section
  // ----------------------------

  verifyLoginSection() {
    this.elements.LoginHeader().then(($el) => {
      cy.wrap($el)
        .should('be.visible')
        .and('contain.text', 'Login to your account')
    })
  }
  enterValidLoginInfo(email, password) {
    this.elements.EmailAddress().clear().type(email)
    this.elements.Password().clear().type(password)

  }

  enterInValidLoginInfo(Invalidemail, password) {
    this.elements.EmailAddress().clear().type(Invalidemail)
    this.elements.Password().clear().type(password)

  }

  clickLoginButton() {
    this.elements.LoginButton().click()

  }

  verifyErrorMessage() {
    this.elements.ErrorMessage().should('have.text', 'Your email or password is incorrect!')
  }


}
export default LoginPage;