it('should get user account detail by email', () => {
  const email = Cypress.env('EMAIL');

  cy.request({
    method: 'GET',
    url: `https://automationexercise.com/api/getUserDetailByEmail?email=${email}`
  }).then((response) => {
    expect(response.status).to.eq(200);

    const body = typeof response.body === 'string'
      ? JSON.parse(response.body)
      : response.body;

    expect(body).to.have.property('responseCode', 200);
    expect(body).to.have.property('user');

    const user = body.user;

    expect(user).to.include.all.keys('id', 'name', 'email');

    const optionalKeys = [
      'title', 'birth_date', 'birth_month', 'birth_year',
      'firstname', 'lastname', 'company', 'address1', 'address2',
      'country', 'zipcode', 'state', 'city', 'mobile_number'
    ];
    optionalKeys.forEach(key => {
      if (user[key]) {
        cy.log(`ℹ️ Found optional field: ${key} = ${user[key]}`);
      }
    });

    cy.log('📧 Retrieved user details for:', user.email);
    cy.log('👤 Name:', user.name);
  });
});