class CheckoutPage {
  // ----------------------------
  // Locators Section
  // ----------------------------
  elements = {
    ProceedToCheckOut: () => cy.contains('Proceed To Checkout'),
    RegisterLinkInCheckout: () => cy.get('a[href="/login"]').eq(1),
    Name: () => cy.get('.address_firstname.address_lastname'),
    address: () => cy.get('.address_address1.address_address2'),
    CityAddress: () => cy.get('.address_city.address_state_name.address_postcode'),
    AddressCountryName: () => cy.get('.address_country_name'),
    PhoneName: () => cy.get('.address_phone'),
    textArea: () => cy.get('.form-control'),
    PlaceOrder: () => cy.contains('Place Order'),
    NameOnCard: () => cy.get('[data-qa="name-on-card"]'),
    cardnumber: () => cy.get('[data-qa="card-number"]'),
    CVC: () => cy.get('[data-qa="cvc"]'),
    expirymonth: () => cy.get('[data-qa="expiry-month"]'),
    expiryear: () => cy.get('[data-qa="expiry-year"]'),
    PayButton: () => cy.get('[data-qa="pay-button"]'),
    ValidationMessage: () => cy.contains('Congratulations! Your order has been confirmed!'),
    DownloadInovice: () => cy.get('.btn.btn-default.check_out').contains('Download Invoice').should('be.visible'),
    AddressDelivery: () => cy.get('#address_delivery'),
    AddressInovice: () => cy.get('#address_invoice')
  };

  // ----------------------------
  // Methods Section
  // ----------------------------

  ClickInProceedToCheckout() {
    this.elements.ProceedToCheckOut().click()
  }
  ClickInRegisterLinkInCheckout() {
    this.elements.RegisterLinkInCheckout().click()
  }

  VerifyAddressDetails() {
    this.elements.Name().should('be.visible')
    this.elements.address().should('be.visible')
    this.elements.CityAddress().should('be.visible')
    this.elements.AddressCountryName().should('be.visible')
    this.elements.PhoneName().should('be.visible')



  }
  EnterInTextAreaAndClickOnOrder(text) {
    this.elements.textArea().type(text)
    this.elements.PlaceOrder().click()
  }
  EnterPaymentDetails(cardName, cardnumber, CVC, expirymonth, expiryear) {
    this.elements.NameOnCard().type(cardName)
    this.elements.cardnumber().type(cardnumber)
    this.elements.CVC().type(CVC)
    this.elements.expirymonth().type(expirymonth)
    this.elements.expiryear().type(expiryear)


  }

  ClickInPayButton() {
    this.elements.PayButton().click()

  }
  CheckOrderSucessMessageDisplay() {
    this.elements.ValidationMessage().should('be.visible')
  }

  ClickInDownloadInovice() {
    this.elements.DownloadInovice().click()
    const downloadsFolder = Cypress.config("downloadsFolder")
    cy.readFile(`${downloadsFolder}/invoice.txt`, 'utf8', { timeout: 20000 }).then((text) => {
      expect(text).to.include('Hi Raneen Maqbul');
      expect(text).to.match(/Your total purchase amount is \d+/i);
      expect(text).to.include('Thank you');
    });
  }

  VerifyAddressBillingAndDeliveryAddress(name, company, address1, city) {

    this.elements.AddressDelivery().should('be.visible').and(($el) => {
      expect($el.text()).to.include(name)
      expect($el.text()).to.include(company)
      expect($el.text()).to.include(address1)
      expect($el.text()).to.include(city)
    })

    // Verify Billing Address
    this.elements.AddressInovice().should('be.visible').and(($el) => {
      expect($el.text()).to.include(name)
      expect($el.text()).to.include(company)
      expect($el.text()).to.include(address1)
      expect($el.text()).to.include(city)
    })


  }


}
export default CheckoutPage;