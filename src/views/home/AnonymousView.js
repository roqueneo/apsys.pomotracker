import React from 'react';

/** Material UI import section */
import { makeStyles } from '@material-ui/core';
import Timer from '../timer/Timer';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center'
	}
}));

const AnonymousView = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Timer />
		</div>
	);
};

export default AnonymousView;
