const argvParser = require('./argvParser');

const args = argvParser(process.argv);

const getHostname = () => {
	const host = args.host || 'localhost';
	const port = args.port || 3000;

	return { host, port };
};

module.exports = getHostname;
