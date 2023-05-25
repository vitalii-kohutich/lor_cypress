/// <reference types="Cypress" />
// ***********************************************
import '@testing-library/cypress/add-commands';
import '@shelex/cypress-allure-plugin';


declare global {
	namespace Cypress {
		interface Chainable {
			login(loginName: string, password: string): Chainable
		}
	}
}


Cypress.Commands.add('login', (loginName: string, password: string) => {
	cy.clearCookies();
	cy.clearLocalStorage();
	cy.visit('/');
	cy.get('input[data-test=username]').type(loginName);
	cy.get('input[data-test=password]').type(`${password}{enter}`, { log: false });
	cy.url().should('contain', 'inventory.html')
})