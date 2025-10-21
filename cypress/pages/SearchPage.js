class SearchPage{

  elements= {
    SearchBox: ()=> cy.get('#search_product'),
    SubmitButton: ()=>cy.get('#submit_search'),
    SearchProductsTitle:()=>cy.contains('Searched Products'),
    ProductName:()=>cy.get('.productinfo p')



    }



    Visit(){
   cy.visit('/');
    }

    EnterProductNameInSearchBox(ProductName){
   this.elements.SearchBox().type(`${ProductName}{enter}`)
   this.elements.SubmitButton().click()
    }

   VerifySearchProductsVisible(){
    this.elements.SearchProductsTitle().should('be.visible')
   }

   VerifySearchResultRelated(productName){
    this.elements.ProductName().each(($el) => {
      cy.wrap($el.text().toLowerCase()).should('include', productName);
    });
   }
}
export default SearchPage;