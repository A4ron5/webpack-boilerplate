const entries = require('./entry');
const outputConfig = require('./output');
const optimization = require('./optimization');

const config = {
	entry: entries,
	output: outputConfig,
	...optimization,
};

module.exports = config;
