import { IBuildDefine } from './types/config'

export function buildDefine({
	isDev,
	apiUrl,
	env
}: IBuildDefine): Record<string, any> {
	return {
		__IS_DEV__: JSON.stringify(isDev),
		__API__: JSON.stringify(apiUrl),
		__PROJECT__: JSON.stringify('frontend'),
		// If you want to expose all env variables, which is not recommended
		'process.env': env
	}
}
