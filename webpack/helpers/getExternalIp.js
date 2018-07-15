const ip = require('ip');
const colors = require('colors/safe');

const getExternalIp = (port) => {
	const externalIp = `http://${ip.address()}:${port}`;
	const key = colors.green.bgBlack.bold('External IP:');
	const value = colors.yellow.bgBlack.bold(externalIp);

	return `${key}\t${value}`;
};

module.exports = getExternalIp;
