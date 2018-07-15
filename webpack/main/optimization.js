const isDev = (process.env.NODE_ENV === 'development');
const isProd = (process.env.NODE_ENV === 'production');

const splitChunks = {
	chunks: 'async',
	minSize: 30000,
	minChunks: 1,
	maxAsyncRequests: 5,
	maxInitialRequests: 3,
	name: true,
	cacheGroups: {
		vendor: {
			chunks: 'initial',
			name: 'vendor',
			test: /node_modules/,
			enforce: true,
		},
	},
};

const config = {
	target: 'web',
	cache: isDev,
	mode: (isDev) ? 'development' : 'production',
	devtool: (isDev) ? 'cheap-module-eval-source-map' : 'source-map',
	optimization: {
		removeAvailableModules: true,
		removeEmptyChunks: true,
		mergeDuplicateChunks: true,
		flagIncludedChunks: isProd,
		occurrenceOrder: isProd,
		providedExports: true,
		usedExports: isProd,
		sideEffects: isProd,
		concatenateModules: isProd,
		splitChunks,
		runtimeChunk: isDev,
		noEmitOnErrors: isProd,
		namedModules: isDev,
		namedChunks: isDev,
		nodeEnv: process.env.NODE_ENV,
		minimize: isProd,
	},
};

module.exports = config;
