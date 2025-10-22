describe('API Get All Brands List', () => {

  it('should return all brands with status 200 and valid structure', () => {
    cy.request({
      method: 'GET',
      url: 'https://automationexercise.com/api/brandsList',
    }).then((response) => {

     
      expect(response.status).to.eq(200);
      const body = JSON.parse(response.body);
      expect(body).to.have.property('responseCode', 200);
      expect(body).to.have.property('brands');
      expect(body.brands).to.be.an('array').and.not.be.empty;

     
      const brand = body.brands[0];
      expect(brand).to.have.all.keys('id', 'brand');
      expect(brand.id).to.be.a('number');
      expect(brand.brand).to.be.a('string');
    });
  });

  it('should return method not supported message when using POST instead of GET for Brand List',()=>{
    cy.request({
        url:'https://automationexercise.com/api/brandsList',
        method:'PUT',
        failOnStatusCode: false

    }).then((response=>{
    expect(response.status).to.eq(200);
    expect(response.body).to.contain('This request method is not supported');


    }))
  })

});