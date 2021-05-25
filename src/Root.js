import React from 'react';

/** Import helpers section **/
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

/** Theme definition section */
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from './resources/themes/defaultTheme';

const appTheme = createMuiTheme(theme);

const Root = ({ children }) => (
	<MuiThemeProvider theme={appTheme}>
		{children}
	</MuiThemeProvider>
);

export default Root;

// If the execution has a cypress value, expose the redux store for testing purpose
// if (window.Cypress) {
// 	window.store = store;
// }
