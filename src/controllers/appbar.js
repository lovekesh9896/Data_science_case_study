import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { CloudDownload } from "@material-ui/icons";
import MyProfile from "../components/myProfile";
// import { NotificationsIcon } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();
	const [showProfile, setShowProfile] = useState(false);
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Indian Startups Investment Case Study
					</Typography>
					<Button
						className={classes.button}
						variant="contained"
						target="_blank"
						href="https://drive.google.com/file/d/15tohnVqDqIoXvWcAnfp45ICu8x79md4o/view?usp=sharing"
						endIcon={<CloudDownload />}
					>
						Download Dataset
					</Button>
					{/* <Button
						color="inherit"
						onClick={() => setShowProfile(!showProfile)}
					>
						<Avatar alt="Remy Sharp" src="./images/lovekesh.jpg" />
					</Button> */}
				</Toolbar>
			</AppBar>
		</div>
	);
}
