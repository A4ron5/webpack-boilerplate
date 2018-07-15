const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { serviceAliases } = require('../aliases');

const general = [
	new HtmlWebpackPlugin({
		template: serviceAliases.appHtml,
		favicon: serviceAliases.favicon,
		filename: 'index.html',
		chunksSortMode: 'dependency',
	}),

	new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /(ru)/),
];

module.exports = general;
