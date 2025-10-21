class CategoryPage {

    // ----------------------------
    // Locators Section
    // ----------------------------
    elements = {
        CategoryLink: () => cy.contains('Category'),
        WomenCategory: () => cy.contains('Women'),
        DressCategory: () => cy.get('a[href="/category_products/1"]'),
        DressValidationMessage: () => cy.contains('Women - Dress Products'),
        menCategory: () => cy.contains('Men'),
        TshirtsCategory: () => cy.contains('Tshirts'),
        TshirtMenValidationMessage: () => cy.contains('Men - Tshirts Products')
    };

    // ----------------------------
    // Methods Section
    // ----------------------------
    VerifyCategoryLink() {
        this.elements.CategoryLink().should('be.visible')

    }
    ClickInWomenCategory() {
        this.elements.WomenCategory().click()
    }

    ClickInDressCategory() {
        this.elements.DressCategory().click()
    }

    ValidationMessageForDress() {
        this.elements.DressValidationMessage().should('be.visible')
    }
    ClickInMenCategory() {
        this.elements.menCategory().click()
        this.elements.TshirtsCategory().click()
    }
    ValidationMessageForMen() {
        this.elements.TshirtMenValidationMessage().should('be.visible')
    }


}

export default CategoryPage;