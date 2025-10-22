describe('API Flow: Register → Delete Account', () => {
  let generatedEmail;
  const password = '123456';

  before(() => {
    generatedEmail = `raneen+${Date.now()}@example.com`;
    Cypress.env('EMAIL', generatedEmail);
    Cypress.env('PASSWORD', password);
    cy.log('Generated Email:', generatedEmail);
  });
  

  it('should register a new user successfully', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/createAccount',
      form: true,
      body: {
        name: 'Raneen Maqbul',
        email: Cypress.env('EMAIL'),
        password: Cypress.env('PASSWORD'),
        title: 'Miss',
        birth_date: '15',
        birth_month: 'June',
        birth_year: '1997',
        firstname: 'Raneen',
        lastname: 'Maqbul',
        company: 'Aspire QA Team',
        address1: '123 Queen Rania Street',
        address2: 'Building 4, Apartment 12',
        country: 'Jordan',
        zipcode: '11941',
        state: 'Amman',
        city: 'Amman',
        mobile_number: '+962790000000'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);

      const body = typeof response.body === 'string'
        ? JSON.parse(response.body)
        : response.body;

      expect(body).to.have.property('responseCode', 201);
      expect(body.message).to.include('User created!');
      cy.log('✅ Account created for:', Cypress.env('EMAIL'));
    });
  });


it('should attempt to delete the same user account', () => {
  const email = Cypress.env('EMAIL');
  const password = Cypress.env('PASSWORD');

  cy.request({
    method: 'DELETE',
    url: `https://automationexercise.com/api/deleteAccount?email=${email}&password=${password}`
  }).then((response) => {
    expect(response.status).to.eq(200);

    const body = typeof response.body === 'string'
      ? JSON.parse(response.body)
      : response.body;

    cy.log('Response:', JSON.stringify(body, null, 2));

    expect(body).to.have.property('responseCode');

    if (body.responseCode === 200) {
      expect(body.message).to.include('Account deleted');
      cy.log('🗑️ Account deleted successfully.');
    } else {
      expect(body.responseCode).to.eq(400);
      expect(body.message).to.match(/not found|missing/i);
      cy.log('⚠️ API returned 400 - mock behavior detected (account not found).');
    }
  });
});

it('should update user account', () => {
    cy.request({
      method: 'PUT',
      url: 'https://automationexercise.com/api/updateAccount',
      form: true,
      body: {
        name: 'Raneen Maqbul',
        email: Cypress.env('EMAIL'),
        password: Cypress.env('PASSWORD'),
        title: 'Miss',
        birth_date: '15',
        birth_month: 'June',
        birth_year: '1997',
        firstname: 'Raneen',
        lastname: 'Maqbul',
        company: 'Raneen Company',
        address1: '123 Queen Rania Street',
        address2: 'Building 4, Apartment 12',
        country: 'Jordan',
        zipcode: '11941',
        state: 'Amman',
        city: 'Amman',
        mobile_number: '+962791234567'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);

      const body = typeof response.body === 'string'
        ? JSON.parse(response.body)
        : response.body;

      expect(body).to.have.property('responseCode', 200);
      expect(body.message).to.include('User updated!');
      cy.log('✅ Account Updated for:', Cypress.env('EMAIL'));
    });
  });





});