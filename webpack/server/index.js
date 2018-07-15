const webpack = require('webpack');
const runServer = require('./runServer');
const { onDoneHd } = require('./compilerHooks');
const webpackConfig = require('../../webpack.config');

if (process.env.NODE_ENV === 'production') {
	process.exit(1);
}

const compiler = webpack(webpackConfig);

compiler.plugin('done', onDoneHd);

const WDMConfig = {
	stats: 'none',
	logLevel: 'silent',
	hot: true,
	writeToDisk: false,
	publicPath: webpackConfig.output.publicPath,
};

runServer(compiler, WDMConfig);
