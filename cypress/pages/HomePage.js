class HomePage {
  // ----------------------------
  // Locators Section
  // ----------------------------
  elements = {
    signupLoginButton: () => cy.get('a[href="/login"]').first(),
    SubscriptionLink:()=>cy.contains('Subscription'),
    EmailInputField:()=>cy.get('#susbscribe_email'),
    SubscribeArrow:()=>cy.get('#subscribe'),
    SuccessSubscribeMessage:()=>cy.contains('You have been successfully subscribed!'),
    RecomendedItem:()=>cy.contains('recommended items').scrollIntoView(),
    AddTocartForRecomended:()=>cy.get('a[data-product-id="4"]').eq(2),
    ScrollUpArrow:()=>cy.get('#scrollUp'),
    Title:()=>cy.contains('Full-Fledged practice website for Automation Engineers')




    
  };

  // ----------------------------
  // Methods Section
  // ----------------------------

  visit() {
    cy.visit('/', { failOnStatusCode: false });
    cy.log('Navigated to Automation Exercise homepage');
  }

  verifyHomePage() {
    cy.title().should('eq', 'Automation Exercise');
    cy.log('✅ Home page title verified successfully');
  }

  clickSignupLogin() {
    this.elements.signupLoginButton().should('be.visible').click();
    cy.url().should('include', '/login');
    cy.log('👉 Clicked on Signup/Login button');
  }

  ScrollDownToFooter(){
    cy.scrollTo('bottom')
    this.elements.SubscriptionLink().should('be.visible')
    
  }
  SubscribeProcess(email){
    this.elements.EmailInputField().type(email)
    this.elements.SubscribeArrow().click()
  }

  VerifySuccessSubscribeMSG(){
  this.elements.SuccessSubscribeMessage().should('be.visible')
  }

  VerifyRecomendedItem(){
    this.elements.RecomendedItem().should('be.visible')
  }
  ClickInAddToCartRecomendedItem(){
        this.elements.AddTocartForRecomended().click()

  }

  ClickInScrollUpArrow(){
    this.elements.ScrollUpArrow().click()
  }
  CheckTitleVisibleAfterScrollUp(){
    this.elements.Title().should('be.visible')
  }
 ClickInScrollUp(){
cy.scrollTo('top')
  }
}

export default HomePage;