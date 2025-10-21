class ProductsPage {

  elements = {
    ProductsLink: () => cy.get('a[href="/products"]'),
    ProductList: () => cy.get('.features_items .product-image-wrapper',{timeout:10000}),
    ViewProducts: () => cy.get('.choose a').first(),
    ProductName: () => cy.get('.product-information h2'), // Product Name
    CategoryName: () => cy.get('.product-information p').eq(0), // Category
    Price: () => cy.get('.product-information span span'), // Price
    Avaliability: () => cy.get('.product-information p').eq(1), // Availability
    Condition: () => cy.get('.product-information p').eq(2), // Condition
    Brand: () => cy.get('.product-information p').eq(3), // Brand
    Product: () => cy.get('.product-image-wrapper'),//first Product
    AddToCartButton: () => cy.get('.product-overlay').first().contains('Add to cart'),//First add to cart
    SuccessMessage: () => cy.contains('Your product has been added to cart'),
    AddToCartButtonSecondOne: () => cy.get('.product-overlay').eq(1).contains('Add to cart'),//First add to cart
    ViewProductsButton: () => cy.get('a[href="/product_details/1"]').first()

  }


  clickProductLink() {
    this.elements.ProductsLink().click()
  }

  VerifyNavigatedToAllProducts() {
    cy.url().should('include', 'products')
    cy.contains('All Products').should('be.visible')

  }

  VerifyProductListAvilable() {
    this.elements.ProductsLink().should('be.visible')
      .and('have.length.greaterThan', 0);
  }

  ClickViewProductLink() {
    this.elements.ViewProducts().click()
  }

  VerifyNavigatedToProductsDetailPage() {
    cy.url().should('include', 'product_details')
    cy.get('.product-information').should('be.visible');


  }

  ValidateProductInfo() {
    this.elements.ProductName().should('be.visible').and('not.be.empty')
    this.elements.CategoryName().should('contain.text', 'Category')
    this.elements.Price().should('be.visible').and('contain.text', 'Rs.')
    this.elements.Avaliability().should('contain.text', 'Availability')
    this.elements.Condition().should('contain.text', 'Condition')
    this.elements.Brand().should('contain.text', 'Brand')


  }

  ClickInFirstAddToCart() {
    this.elements.Product().first().trigger('mouseover')
    this.elements.AddToCartButton().click({ force: true })
  }
  VerifySucessAddToCartMessage() {
    this.elements.SuccessMessage().should('be.visible')
  }

  ClickInSecondAddToCart() {
    this.elements.Product().eq(1).trigger('mouseover')
    this.elements.AddToCartButtonSecondOne().click({ force: true })
  }

  ClickInViewProductButton() {
    this.elements.ViewProductsButton().click()
  }
}
export default ProductsPage;