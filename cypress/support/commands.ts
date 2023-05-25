/// <reference types="Cypress" />
// ***********************************************
import '@testing-library/cypress/add-commands';
import '@shelex/cypress-allure-plugin';
import '@cypress/xpath';

declare global {
	namespace Cypress {
		interface Chainable {
			login_no_cookies(loginName: string, password: string): Chainable
		}

		interface Chainable {
			login_with_cookies(loginName: string, password: string): Chainable
		}

		interface Chainable {
			selectByText(tegEl: string, searchText: string): Cypress.Chainable<JQuery<HTMLElement>>;
		}

		interface Chainable {
			selectByLabel(label: string): Cypress.Chainable<JQuery<HTMLElement>>;
		}

		interface Chainable {
			selectByName(name: string): Cypress.Chainable<JQuery<HTMLElement>>;
		}
	}
}
Cypress.Commands.add('selectByText', (tegEl: string, searchText: string) => {
	return cy.contains(tegEl, searchText);
});

Cypress.Commands.add('selectByLabel', (label: string) => {
	return cy.get(`[label="${label}"]`);
});

Cypress.Commands.add('selectByName', (name: string) => {
	return cy.get(`[name="${name}"]`);
});

Cypress.Commands.add('login_with_cookies', (loginName: string, password: string) => {
	cy.visit('/');
	cy.get('input[data-test=username]').type(loginName);
	cy.get('input[data-test=password]').type(`${password}{enter}`, { log: false });
	cy.url().should('contain', 'inventory.html')
})

Cypress.Commands.add('login_no_cookies', (loginName: string, password: string) => {
	cy.clearCookies();
	cy.clearLocalStorage();
	cy.visit('/');
	cy.get('input[data-test=username]').type(loginName);
	cy.get('input[data-test=password]').type(`${password}{enter}`, { log: false });
	cy.url().should('contain', 'inventory.html');
})