const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const historyMiddleware = require('connect-history-api-fallback');

const { getHostname } = require('../helpers');

const runServer = (compiler, WDMConfig) => {
	const { host, port } = getHostname();
	
	const server = express()
		.use(historyMiddleware())
		.use(webpackDevMiddleware(compiler, WDMConfig))
		.use(webpackHotMiddleware(compiler));

	server.listen(port, host);
};

module.exports = runServer;
