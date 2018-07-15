const { serviceAliases } = require('../aliases');

const isDev = (process.env.NODE_ENV === 'development');

const getEntries = () => {
	const entries = {
		app: [serviceAliases.app],
	};

	if (isDev) {
		Object.keys(entries).forEach((point) => {
			entries[point] = [...entries[point], `webpack-hot-middleware/client?name=${point}`];
		});
	}

	return entries;
};

const entries = getEntries();

module.exports = entries;
