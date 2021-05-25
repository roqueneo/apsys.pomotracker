import React from 'react';
import PropTypes from 'prop-types';

/** Material UI import section */
import { Card, CardActions, CardContent, IconButton, Typography } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import PlayIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const convetToTimeStamp = (totalSeconds) => {
	let minutes = Math.floor(totalSeconds / 60);
	let seconds = totalSeconds % 60;
	return `${minutes}:${seconds}`;
};

const Timer = ({ seconds = 0 }) => {
	const timeStamp = convetToTimeStamp(seconds);
	return (
		<Card>
			<CardContent>
				<Typography variant="h1">{timeStamp}</Typography>
			</CardContent>
			<CardActions>
				<IconButton>
					<ReplayIcon />
				</IconButton>
				<IconButton>
					<PlayIcon />
				</IconButton>
				<IconButton>
					<SkipNextIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
};

Timer.propTypes = {
	seconds: PropTypes.number
};

export default Timer;
