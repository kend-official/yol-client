import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), legacy()],
	resolve: {
		alias: {
			components: '/src/components/',
			pages: '/src/pages/',
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.ts',
	},
});
