describe('API Get All Products List', () => {

    it('should return all products with status 200 and valid structure', () => {

        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/productsList',
        }).then((response) => {

            const body = JSON.parse(response.body);

            expect(body).to.have.property('responseCode', 200);
            expect(body).to.have.property('products');
            expect(body.products).to.be.an('array').and.not.be.empty;

            const product = body.products[0];
            expect(product).to.have.all.keys('id', 'name', 'price', 'brand', 'category');
        });
    });

    it('should return method not supported message when using POST instead of GETfor Product List', () => {
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/productsList',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.contain('This request method is not supported');
        });
    });

});


