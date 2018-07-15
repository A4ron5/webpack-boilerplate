const colors = require('colors/safe');

const getLocalIp = (host, port) => {
	const localIP = `http://${host}:${port}`;
	const key = colors.green.bgBlack.bold('Local IP:');
	const value = colors.yellow.bgBlack.bold(localIP);

	return `${key}\t${value}`;
};

module.exports = getLocalIp;
