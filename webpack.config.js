const mainConfig = require('./webpack/main');
const moduleRules = require('./webpack/rules');
const activePlugins = require('./webpack/plugins');

const { serviceAliases } = require('./webpack/aliases');

const isDev = (process.env.NODE_ENV === 'development');

const config = {
	...mainConfig,
	module: {
		unsafeCache: isDev,
		rules: moduleRules,
	},
	plugins: activePlugins,
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [serviceAliases.src, 'node_modules'],
	},
};

module.exports = config;
