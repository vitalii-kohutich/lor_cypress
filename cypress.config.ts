import { defineConfig } from 'cypress';
import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			allureWriter(on, config);
			return config;
		},
		baseUrl: "https://www.saucedemo.com/",
		chromeWebSecurity: false,
		supportFile: "cypress/support/commands.ts"
	},
});
