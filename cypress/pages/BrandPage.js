class BrandPage {

    // ----------------------------
    // Locators Section
    // ----------------------------
    elements = {
        BrandLink: () => cy.contains('Brands'),
        BrandPolo: () => cy.get('a[href="/brand_products/Polo"'),
        BrandProducts: () => cy.get('.features_items .product-image-wrapper'),
        BrandPageone: () => cy.contains('Brand - Polo Products'),
        SecondBrans: () => cy.get('a[href="/brand_products/Madame"'),
        BrandPagetwo: () => cy.contains('Brand - Madame Products'),


    };

    // ----------------------------
    // Methods Section
    // ----------------------------
    VerifyBrandLinkVisible() {
        this.elements.BrandLink().should('be.visible')

    }

    ClickInBrandPolo() {
        this.elements.BrandPolo().click()

    }

    VerifyBrandProductsDisplayed() {
        this.elements.BrandProducts()
            .should('exist')
            .and('be.visible');
        this.elements.BrandPageone().should('be.visible')

    }

    ClickInSecondBrand() {
        this.elements.SecondBrans()
            .click();

    }

    VerifyBrandTwoProductsDisplayed() {
        this.elements.BrandProducts()
            .should('exist')
            .and('be.visible');
        this.elements.BrandPagetwo().should('be.visible')

    }

}

export default BrandPage;