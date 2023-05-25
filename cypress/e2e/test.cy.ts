import LoginData from '../fixtures/login-data.json';
import Checkout from '../fixtures/customer-data.json';


describe('Buy item', () => {
  before(() => {
    cy.allure().description('Test №1: Buy item');
    cy.allure().step('Open the Home (Login) page', true);
    cy.visit('/');
  });

  it('test_1: Buys an item from the site', () => {
    cy.allure().step('Login with valid data', true);
    cy.login(LoginData.user_name, LoginData.password);

    cy.allure().step('Add first item to the cart', true);
    cy.get('.pricebar').eq(0).find('button').should('have.text', 'Add to cart').click();

    cy.allure().step('Item has been added to the cart', true);
    cy.get('.pricebar').eq(0).find('button').should('have.text', 'Remove');
    cy.get('.shopping_cart_link').find('span').should('have.text', '1');

    cy.allure().step('Proceed to checkout', true);
    cy.get('.shopping_cart_link').click();
    cy.url().should('contain', 'cart.html')


    cy.allure().step('Click on "Checkout" button', true);
    cy.get('button[data-test=checkout]').click();


    cy.allure().step('Fill the user information', true);
    cy.url().should('contain', 'checkout-step-one.html')

    cy.get('input[data-test=firstName]').type(Checkout.first_name);
    cy.get('input[data-test=lastName]').type(Checkout.last_name);
    cy.get('input[data-test=postalCode]').type(Checkout.postal_code);

    cy.allure().step('Click "Continue" button', true);
    cy.get('h3[data-test=error]').should('not.exist');
    cy.get('input[data-test=continue]').click();

    cy.allure().step('Proceed to checkout step two', true);
    cy.url().should('contain', 'checkout-step-two.html')

    cy.allure().step('Finish checkout', true);
    cy.get('button[data-test=finish]').click();
    cy.url().should('contain', 'checkout-complete.html')

    cy.allure().step('Finish checkout', true);
    cy.get('#checkout_complete_container');


  });
});