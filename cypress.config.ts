import { defineConfig } from 'cypress';
import allureWriter from "@shelex/cypress-allure-plugin/writer";



export default defineConfig({
	e2e: {
		baseUrl: "https://www.lorespresso.com/",
		chromeWebSecurity: false,
		supportFile: "cypress/support/commands.ts",
		video: false,
		screenshotsFolder: './screenshots',
		videosFolder: './videos',
		trashAssetsBeforeRuns: true,
		env: {
			USER_VALID_LOGIN: 'g',
			USER_VALID_PASSWORD: 'qWertyasdf781',
			USER_PHONE_NUMBER: '+388888888888',
			DIGIT_CODE: '1111',
			USER_REGISTRATION: 'https://<url>',
			allure: true,
			allureResultsPath: 'allure-results',
			domain: {
				dev: `https://www.lorespresso.com/`,
				release: '<url>',
				prod: 'https://www.lorespresso.com/'
			},
		},
		specPattern: ['cypress/e2e/**/*.cy.ts', 'cypress/e2e/**/**.ts'],
		setupNodeEvents(on, config) {
			allureWriter(on, config);
			return config;
		},
	},
});
