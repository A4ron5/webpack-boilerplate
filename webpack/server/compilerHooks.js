const colors = require('colors/safe');
const clearConsole = require('react-dev-utils/clearConsole');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const { getHostname, getLocalIp, getExternalIp } = require('../helpers');

const { host, port } = getHostname();

const onDoneHd = (stats) => {
	clearConsole();
	console.log(getLocalIp(host, port));
	console.log(getExternalIp(port), '\n');

	const rawMessages = stats.toJson({}, true);
	const messages = formatWebpackMessages(rawMessages);

	if (!messages.errors.length && !messages.warnings.length) {
		console.log(colors.green.bgBlack.bold('Compiled successfully!\n'));
	}

	if (messages.errors.length) {
		console.log(colors.red.bgBlack.bold('Failed to compile:\n'));

		messages.errors.forEach((e) => console.log(e));
	}

	if (messages.warnings.length) {
		console.log(colors.yellow.bgBlack.bolds('Compiled with warnings:\n'));

		messages.warnings.forEach((w) => console.log(w));
	}
};

module.exports = {
	onDoneHd,
};
