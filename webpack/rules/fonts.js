const { serviceAliases } = require('../aliases');

const file = {
	loader: 'file-loader',
	options: {
		digest: 'hex',
		name: 'assets/fonts/[name]-[sha512:hash:base64:12].[ext]',
	},
};

const fonts = [
	{
		test: /\.(woff|woff2|ttf|otf|eot)$/,
		include: serviceAliases.src,
		exclude: /node_modules/,
		use: [file],
	},
];

module.exports = fonts;
