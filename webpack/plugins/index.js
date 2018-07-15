const development = require('./development');
const production = require('./production');
const general = require('./general');

const isDev = (process.env.NODE_ENV === 'development');

const plugins = (isDev)
	? [...general, ...development]
	: [...general, ...production];

module.exports = plugins;
