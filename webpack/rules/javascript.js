const { serviceAliases } = require('../aliases');

const javascript = [
	{
		test: /\.(js|jsx)$/,
		include: serviceAliases.src,
		exclude: /node_modules/,
		loader: 'babel-loader',
	},
];

module.exports = javascript;
