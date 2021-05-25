import RobotoRegular from '../fonts/Roboto-Regular.ttf';

const robotoRegularFont = {
	fontFamily: 'Roboto',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: 400,
	src: `
		local('Roboto'),
		local('Roboto-Regular'),
		url(${RobotoRegular}) format('ttf')
	`,
	unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
  
const theme = {
	palette: {
		common: {
			black: "#000",
			white: "#fff",
			purple: "#464A97"
		},
		"background": {
			"paper": "#fff",
			"default": "#fafafa"
		},
		"primary": {
			"light": "#C45860",
			"main": "#8A2432",
			"dark": "#6e1c28",
			"contrastText": "#fff"
		},
		"secondary": {
			"light": "#343ed1",
			"main": "#545CD8",
			"dark": "#222994",
			"contrastText": "#fff"
		},
		"error": {
			"light": "#e57373",
			"main": "#f44336",
			"dark": "#d32f2f",
			"contrastText": "#fff"
		},
		"text": {
			"primary": "#4D4D4D",
			"secondary": "#CECECE",
			"disabled": "rgba(0, 0, 0, 0.38)",
			"hint": "rgba(0, 0, 0, 0.38)"
		}
    },
	typography: {
		fontFamily: [
				"Roboto",
				"sans-serif"
			].join(','),
		fontSize: 12,
		h6: {
			fontSize: 15,
			fontWeight: 600,
		}		
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				'@font-face': [robotoRegularFont],
			},
		},
	},	
}

export default theme;