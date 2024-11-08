interface ISuppressTrashWarnings {
	logger: {
		warn: (msg: 'string', options: object) => void
	}
}

// Кастомный плагин для подавления мусорных предупреждений в консоли Vite
export const suppressTrashWarnings = () => {
	return {
		name: 'suppress-trash-warnings',
		configResolved(config: ISuppressTrashWarnings) {
			const originalWarn = config.logger.warn
			config.logger.warn = (msg, options) => {
				if (
					!msg.includes('Assets in public directory cannot be imported') &&
					!msg.includes(
						'Files in the public directory are served at the root path.'
					)
				) {
					originalWarn(msg, options)
				}
			}
		}
	}
}
