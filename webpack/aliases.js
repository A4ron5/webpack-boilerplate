const path = require('path');

const serviceAliases = {
	app: path.join(__dirname, '../frontend/main.jsx'),
	appHtml: path.join(__dirname, '../frontend/index.html'),

	src: path.join(__dirname, '../frontend'),
};

module.exports = {
	serviceAliases,
};
