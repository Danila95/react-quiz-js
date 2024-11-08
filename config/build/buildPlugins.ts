import { PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { createHtmlPlugin } from 'vite-plugin-html'
import { suppressTrashWarnings } from './suppressTrashWarningsPlagin'

export function buildPlugins(): PluginOption[] {
	return [
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		svgr({ exportAsDefault: true, include: '**/*.svg' }),
		react(),
		suppressTrashWarnings(),
		createHtmlPlugin({
			minify: true
		})
	]
}
