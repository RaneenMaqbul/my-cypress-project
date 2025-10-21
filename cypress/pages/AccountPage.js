class AccountPage {

  // ----------------------------
  // Locators Section
  // ----------------------------
  elements = {
    loggedInAs: (name) => cy.contains(`Logged in as ${name}`,{timeout:10000}),
    deleteAccountBtn: () => cy.get('[href="/delete_account"]'),
    accountDeletedMsg: () => cy.contains('Account Deleted!'),
    continueButton: () => cy.get('[data-qa="continue-button"]'),
    
  };

  // ----------------------------
  // Methods Section
  // ----------------------------

  verifyUserLoggedIn(name) {
    this.elements.loggedInAs(name).should('be.visible');
    cy.log(`✅ Verified user is logged in as ${name}`);
  }

  deleteAccount() {
    this.elements.deleteAccountBtn().should('be.visible').click();
    cy.log('🗑️ Clicked on "Delete Account" button');
  }

  verifyAccountDeleted() {
    this.elements.accountDeletedMsg().should('be.visible');
    this.elements.continueButton().click();
    cy.log('✅ Account deletion verified and continue clicked');
  }
}

export default AccountPage;