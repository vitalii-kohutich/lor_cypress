import LoginData from '../../fixtures/store-language-data.json';



describe('Buy item', () => {
  before(() => {
    cy.allure().description('Test №1: Buy item');
    cy.allure().step('Open the Home (Login) page', true);
    cy.visit('/');
  });

  it('test_1: Buys an item from the site', () => {
    cy.allure().step('Login with valid data', true);

  });
});