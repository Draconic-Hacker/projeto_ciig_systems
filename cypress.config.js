import { defineConfig } from "cypress";

export default defineConfig({
	e2e:{
		setupNodeEvents(on, config) {
			// implemente node event listeners here
		},
		supportFile: false, // Desabilita o arquivo de suporte
	},
});