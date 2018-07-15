const { serviceAliases } = require('../aliases');

const file = {
	loader: 'file-loader',
	options: {
		digest: 'hex',
		name: 'assets/media/[name]-[sha512:hash:base64:12].[ext]',
	},
};

const media = [
	{
		test: /\.(mp4|mp3|webm)$/,
		include: serviceAliases.src,
		exclude: /node_modules/,
		use: [file],
	},
];

module.exports = media;
