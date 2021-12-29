import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./page1.css";
const useStyles = makeStyles((theme) => ({
	container: {
		textAlign: "center",
	},
}));

export default function Page1() {
	const classes = useStyles();

	return (
		<Container className={classes.container}>
			<h2>Welcome User</h2>
			<p>
				This is a case study for my Collage Minor Project related data
				science project.
			</p>
			<p className="main-para">
				This dataset has funding information of the Indian startups from
				January 2015 to August 2017. You can download the dataset from
				top left corner.
				<br />
				<h3>Feature Details :</h3>
				<span className="highlight">SNo</span> - Serial number.
				<br />
				<span className="highlight">Date</span> - Date of funding in
				format DD/MM/YYYY.
				<br />
				<span className="highlight">StartupName</span> - Name of the
				startup which got funded.
				<br />
				<span className="highlight">IndustryVertical</span> - Industry
				to which the startup belongs.
				<br />
				<span className="highlight">SubVertical</span> - Sub-category of
				the industry type.
				<br />
				<span className="highlight">CityLocation</span> - City which the
				startup is based out of.
				<br />
				<span className="highlight">InvestorsName</span> - Name of the
				investors involved in the funding round.
				<br />
				<span className="highlight">InvestmentType</span> - Either
				Private Equity or Seed Funding.
				<br />
				<span className="highlight">AmountInUSD</span> - Funding Amount
				in USD.
				<br />
				<span className="highlight">Remarks</span> - Other information,
				if any.
				<br />
			</p>
		</Container>
	);
}
