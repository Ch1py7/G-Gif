import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	root: './',
	publicDir: './public',
	resolve: {
		alias: {
			assets: path.resolve(__dirname, './src/assets'),
			components: path.resolve(__dirname, './src/components'),
			types: path.resolve(__dirname, './src/types'),
			services: path.resolve(__dirname, './src/services'),
			context: path.resolve(__dirname, './src/secontextvices'),
		},
	},
	plugins: [react()],
})
