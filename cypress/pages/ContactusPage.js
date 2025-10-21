class ContactusPage {

  // ----------------------------
  // Locators Section
  // ----------------------------
  elements = {
    ContactUslink: () => cy.get('a[href="/contact_us"]'),
    GetInTouchLink: () => cy.contains('Get In Touch'),
    NameField: () => cy.get('[data-qa="name"]'),
    EmailField: () => cy.get('[data-qa="email"]'),
    SubjectField: () => cy.get('[data-qa="subject"]'),
    MessageField: () => cy.get('#message'),
    uploadFileInput: () => cy.get('input[type="file"]'),
    submitButton: () => cy.get('[data-qa="submit-button"]'),
    ValidationSucessMessage: () => cy.contains('Success! Your details have been submitted successfully.', { timeout: 10000 }),
    HomeElement: () => cy.get('a.btn.btn-success')
  }

  // ----------------------------
  // Methods Section
  // ----------------------------

  ClickInContactUsLink() {
    this.elements.ContactUslink().should('be.visible').click()
  }
  VerifyGetInTouchVisible() {
    this.elements.GetInTouchLink().should('be.visible')

  }
  FillContactUsInfo(name, Email, subject, message) {
    this.elements.NameField().type(name)
    this.elements.EmailField().type(Email)
    this.elements.SubjectField().type(subject)
    this.elements.MessageField().type(message)

  }

  uploadFile(filePath) {
    this.elements.uploadFileInput().selectFile(filePath);
  }

  ClickSubmitButton() {
    this.elements.submitButton().should('be.visible').click()

  }

  VerifySucessMessage() {
    this.elements.ValidationSucessMessage().should('be.visible')

  }
  clickHomeButton() {
    this.elements.HomeElement().should('be.visible').click();
    cy.wait(1000); // Wait for navigation
    cy.url().should('eq', 'https://automationexercise.com/');
    cy.title().should('eq', 'Automation Exercise');
    cy.log('🏠 Navigated back to Home Page');
  }
}
export default ContactusPage;