const path = require('path');

const isDev = (process.env.NODE_ENV === 'development');

const getFilename = () => ((isDev) ? '[name]_[hash].js' : '[name]_[chunkhash].min.js');

const config = {
	path: path.join(__dirname, '../../dist'),
	filename: getFilename(),
	publicPath: '/',
	pathinfo: isDev,
};

module.exports = config;
