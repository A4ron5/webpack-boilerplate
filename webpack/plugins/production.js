const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const production = [
	new MiniCssExtractPlugin({
		filename: '[name]_[hash].css',
		chunkFilename: '[name]_[hash].css',
	}),

	new CompressionPlugin({
		test: /\.(js|css)$/,
		algorithm: 'gzip',
		minRatio: 1,
	}),
];

module.exports = production;
