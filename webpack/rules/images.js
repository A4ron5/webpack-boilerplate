const { serviceAliases } = require('../aliases');
const loaders = require('../commonLoaders');

const isDev = (process.env.NODE_ENV === 'development');

const file = {
	loader: 'file-loader',
	options: {
		digest: 'hex',
		name: 'assets/images/[name]-[sha512:hash:base64:12].[ext]',
	},
};

const images = [
	{
		test: /\.(jpe?g|png|gif)$/,
		include: serviceAliases.src,
		exclude: /node_modules/,
		use: (isDev) ? [file] : [file, loaders.imageWebpack],
	},
	{
		test: /\.svg$/,
		exclude: /(node_modules|colored)/,
		use: [loaders.svgSprite, loaders.svgo],
	},
	{
		test: /\.svg$/,
		include: /colored/,
		use: [loaders.svgSprite],
	},
];

module.exports = images;
