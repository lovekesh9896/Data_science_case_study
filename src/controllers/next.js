import React from 'react';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	button: {
		position: 'fixed',
		right: '13vw',
		bottom: '8vh',
	},
}));

export default function Next(prop) {
	const classes = useStyles();
	if (prop.quesNo === 5) {
		return <div></div>;
	}
	return (
		<Tooltip
			title='Next Question'
			TransitionComponent={Zoom}
			arrow
			placement='top'
		>
			<Button
				className={classes.button}
				variant='contained'
				color='primary'
				endIcon={<Send />}
				onClick={() => prop.SetQuesNo((prop.quesNo + 1) % 6)}
			>
				Next
			</Button>
		</Tooltip>
	);
}
