import colors from 'settings/colors.json';

const getColor = (colorCode, opacity = 1) => {
	const color = colors[colorCode];

	return (color) ? `rgba(${color}, ${opacity})` : colorCode;
};

export default getColor;
