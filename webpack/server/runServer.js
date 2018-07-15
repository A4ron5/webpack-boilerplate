const http = require('http');
const connect = require('connect');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const historyMiddleware = require('connect-history-api-fallback');

const { getHostname } = require('../helpers');

const runServer = (compiler, WDMConfig) => {
	const { host, port } = getHostname();

	const app = connect()
		.use(historyMiddleware())
		.use(webpackDevMiddleware(compiler, WDMConfig))
		.use(webpackHotMiddleware(compiler));

	const server = http.createServer(app);

	server.listen(port, host);
};

module.exports = runServer;
