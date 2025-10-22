describe('API Verify Login', () => {



 

  it('should return 200 and message "User exists!" for valid credentials', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/verifyLogin',
      form: true,
      body: {
        email: Cypress.env('EMAIL'),
        password: Cypress.env('PASSWORD')

      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.contain('User exists!');
    });
  });
  it('Verify Login without email parameter', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/verifyLogin',
      form: true,
      body: {
        password: Cypress.env('PASSWORD')

      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.contain('Bad request, email or password parameter is missing in POST request.');
    });
  });

  it('Use DELETE To Verify Login', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://automationexercise.com/api/verifyLogin',
      body: {
        email: Cypress.env('EMAIL'),
        password: Cypress.env('PASSWORD')

      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    
      const body = typeof response.body === 'string'
      ? JSON.parse(response.body)
      : response.body;

    expect(body).to.have.property('message');
    expect(body.message).to.include('This request method is not supported');

    });
  });


    it('Verify Login With Invalid Password', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/verifyLogin',
      form: true,
      body: {
        email: Cypress.env('EMAIL'),
        password: Cypress.env('INVALIDPASS')

      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.contain('User not found!');
    });
  });


});