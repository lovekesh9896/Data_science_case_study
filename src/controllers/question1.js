import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ques1, code1, thesis1 } from '../components/question1';
import Highlight from 'react-highlight';
import './theme.css';
import { Bar } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
	question: {
		marginTop: '3rem',
		'&::before': {
			content: '"Q. "',
			display: 'contents',
			color: 'blue',
		},
		fontSize: '15px',
		fontWeight: 'bold',
	},
	pre: {
		background: '#fff6ea',
	},
	thesis: {
		marginTop: '3rem',
		marginBottom: '10vh',
		fontWeight: 'bold',
		fontSize: '15px',
	},
}));
let borderColor = 'rgba(12, 105, 253)';
let hoverBackgroundColor = 'rgba(255,99,132,0.4)';
let hoverBorderColor = 'rgba(255,99,132,1)';
const options = {
	scales: {
		yAxes: [
			{
				scaleLabel: {
					display: true,
					labelString: 'No. of Startup fundings',
				},
				gridLines: {
					drawOnChartArea: false,
				},
			},
		],
		xAxes: [
			{
				scaleLabel: {
					display: true,
					labelString: 'Cities',
				},
				gridLines: {
					drawOnChartArea: false,
				},
				barPercentage: 0.4,
			},
		],
	},
};
let data = {
	labels: ['NCR', 'Banglore', 'Mumbai'],
	datasets: [
		{
			label: 'bar charts',
			backgroundColor: 'rgba(12, 105, 253, 0.2)',
			borderColor: borderColor,
			borderWidth: 1,
			hoverBackgroundColor: hoverBackgroundColor,
			hoverBorderColor: hoverBorderColor,
			data: [709, 367, 449, 0],
		},
	],
};

export default function Question1() {
	const classes = useStyles();

	return (
		<Container className={classes.container} maxWidth='md'>
			<Typography className={classes.question} align='left'>
				{ques1}
			</Typography>
			<Highlight language='language-python'>{code1}</Highlight>
			<Bar data={data} options={options} />
			<Typography className={classes.thesis} align='left'>
				{thesis1}
			</Typography>
		</Container>
	);
}
