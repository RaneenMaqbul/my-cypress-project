class TestcasesPage {

  // ----------------------------
  // Locators Section
  // ----------------------------
  elements = {
    TestCasesLink: () => cy.get('a[href="/test_cases"]').first(),

  };

  // ----------------------------
  // Methods Section
  // ----------------------------
ClickInTestCasesLink(){
    this.elements.TestCasesLink().should('be.visible').click()
}

VerifyTestCasesPage(){
cy.url().should('eq', 'https://automationexercise.com/test_cases');
    cy.title().should('eq', 'Automation Practice Website for UI Testing - Test Cases');
}

}

export default TestcasesPage;