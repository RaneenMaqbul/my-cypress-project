class CartPage {

  // ----------------------------
  // Locators Section
  // ----------------------------
  elements = {
    cartButton: () => cy.get('a[href="/view_cart"]').eq(0),
    ContinueShoppingButton: () => cy.contains('Continue Shopping'),
    ViewCart: () => cy.get('a[href="/view_cart"]', { timeout: 10000 }).eq(1),
    ProductTable: () => cy.get('.cart_info tbody tr'),
    Quantity: () => cy.get('#quantity'),          // quantity input on PDP
    AddToCartButton: () => cy.contains('button', 'Add to cart'),
    QuantityInCart: () => cy.get('td.cart_quantity button'),
    RemoveCart: () => cy.get('.cart_quantity_delete'),
    RemoveValidationMesaage: () => cy.contains('Cart is empty!')

  };

  // ----------------------------
  // Methods Section
  // ----------------------------

  ClickInCartButton() {
    this.elements.cartButton().click({force:true})
  }
  ClickInContinueShoppingButton() {
    this.elements.ContinueShoppingButton().click()
  }
  ClickInViewCart() {
    this.elements.ViewCart().should('be.visible').click({ force: true })

  }
  VerifyBothProductsAreAddedToCart() {
    cy.url().should('include', '/view_cart')
    this.elements.ProductTable().should('have.length', 2)
  }
  VerifyCartInfo() {
    this.elements.ProductTable().each(($row) => {
      cy.wrap($row).find('.cart_price p').should('be.visible');     // price
      cy.wrap($row).find('.cart_quantity button, .cart_quantity input').should('be.visible'); // quantity
      cy.wrap($row).find('.cart_total p').should('be.visible');     // total price
    });
  }
  LogQuantity() {
    this.elements.Quantity().clear()
      .type('4')
      .should('have.value', '4');
  }
  ClickAddToCart() {
    this.elements.AddToCartButton().click()
  }

  CheckQuantityInCart() {
    this.elements.QuantityInCart().should('have.text', '4');

  }

  CheckViewCartDisplay() {
    cy.url().should('include', 'view_cart')
  }

  RemoveCartButton() {
    this.elements.RemoveCart().click()

  }

  VerifyRemoveCartValidationMessage() {
    this.elements.RemoveValidationMesaage().should('be.visible')

  }



}

export default CartPage;