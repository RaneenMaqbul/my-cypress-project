describe('API Search Product', () => {

  it('should return products matching the search keyword', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/searchProduct',
      form: true, 
      body: {
        search_product: 'blue'
      }
    }).then((response) => {

      expect(response.status).to.eq(200);

   
      const body = JSON.parse(response.body);

      expect(body).to.have.property('responseCode', 200);
      expect(body).to.have.property('products');
      expect(body.products).to.be.an('array').and.not.be.empty;

      body.products.forEach((product) => {
        expect(
          product.name.toLowerCase()
        ).to.contain('blue'); 
      });
    });
  });


  it('should returnBad request, search_product parameter is missing in POST request when search_product parameter is missing', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/searchProduct',
    failOnStatusCode: false,

    }).then((response) => {

      expect(response.status).to.eq(200);
   expect(response.body).to.contain(
        'Bad request, search_product parameter is missing in POST request'
      );
   
  });

});
});