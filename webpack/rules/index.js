const javascript = require('./javascript');
const images = require('./images');
const fonts = require('./fonts');
const media = require('./media');

const rules = [...javascript, ...images, ...fonts, ...media];

module.exports = rules;
