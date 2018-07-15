const imageWebpack = {
	loader: 'image-webpack-loader',
	options: {
		mozjpeg: {
			progressive: true,
		},
		gifsicle: {
			interlaced: false,
		},
		optipng: {
			optimizationLevel: 4,
		},
		pngquant: {
			quality: '75-90',
			speed: 3,
		},
	},
};

const svgSprite = {
	loader: 'svg-sprite-loader',
};

const svgo = {
	loader: 'svgo-loader',
	options: {
		plugins: [
			{
				removeAttrs: {
					attrs: ['fill', 'fill-rule'],
				},
			},
		],
	},
};

module.exports = {
	imageWebpack,
	svgSprite,
	svgo,
};
