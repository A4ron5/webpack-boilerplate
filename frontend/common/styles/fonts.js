import { injectGlobal } from 'styled-components';

const fonts = [
	{
		family: 'SF',
		weight: 300,
		style: 'normal',
		sources: {
			woff: require('assets/fonts/SF/SFUIDisplay-Light.woff'),
		},
	},

	{
		family: 'SF',
		weight: 400,
		style: 'normal',
		sources: {
			woff: require('assets/fonts/SF/SFUIDisplay-Regular.woff'),
		},
	},

	{
		family: 'SF',
		weight: 500,
		style: 'normal',
		sources: {
			woff: require('assets/fonts/SF/SFUIDisplay-Medium.woff'),
		},
	},

	{
		family: 'SF',
		weight: 600,
		style: 'normal',
		sources: {
			woff: require('assets/fonts/SF/SFUIDisplay-Semibold.woff'),
		},
	},

	{
		family: 'SF',
		weight: 700,
		style: 'normal',
		sources: {
			woff: require('assets/fonts/SF/SFUIDisplay-Bold.woff'),
		},
	},
];

fonts.forEach((font) => {
	const sources = Object.keys(font.sources).reduce((acc, extension) => {
		const url = font.sources[extension];

		return `url(${url}) format('${extension}')`;
	}, '');

	injectGlobal`
			@font-face {
				src: ${sources};
				font-family: ${font.family};
				font-style: ${font.style};
				font-weight: ${font.weight};
			}
		`;
});
