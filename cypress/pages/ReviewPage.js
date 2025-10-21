class ReviewPage {

  // ----------------------------
  // Locators Section
  // ----------------------------
  elements = {
   WriteReviewLink: () => cy.contains('Write Your Review'),
   Reviewername:()=>cy.get('#name'),
      Revieweremail:()=>cy.get('#email'),
      ReviewText:()=>cy.get('#review'),
      SubmitButton:()=>cy.get('#button-review'),
      ReviewMessage:()=>cy.contains('Thank you for your review.')


  };

  // ----------------------------
  // Methods Section
  // ----------------------------


VerifyReviewLink(){
this.elements.WriteReviewLink().should('exist')
}
FillReviewInfo(name,email,text){
this.elements.Reviewername().type(name)
this.elements.Revieweremail().type(email)
this.elements.ReviewText().type(text)

}
ClickInSubmitButton(){
    this.elements.SubmitButton().click()
}

VerifySucessMessageforsubmitReview(){
    this.elements.ReviewMessage().should('be.visible')

}

}

export default ReviewPage;