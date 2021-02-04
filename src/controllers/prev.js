import React from 'react';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	button: {
		position: 'fixed',
		left: '13vw',
		bottom: '8vh',
	},
	icon: {
		transform: 'rotate(180deg)',
	},
}));

export default function Prev(prop) {
	const classes = useStyles();
	if (prop.quesNo <= 0) {
		return <div></div>;
	}
	return (
		<Tooltip
			title='Previous Question'
			TransitionComponent={Zoom}
			arrow
			placement='top'
		>
			<Button
				className={classes.button}
				variant='contained'
				color='primary'
				startIcon={<Send className={classes.icon} />}
				onClick={() => prop.SetQuesNo((prop.quesNo - 1) % 6)}
			>
				Prev
			</Button>
		</Tooltip>
	);
}
