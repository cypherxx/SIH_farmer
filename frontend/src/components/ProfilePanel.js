import React from "react";

import { Avatar, Typography } from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
	profileContainer: {
		marginTop: "20px",
	},
	avatar: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
}));

function ProfilePanel() {
	const classes = useStyles();
	return (
		<div className={classes.profileContainer}>
			<div className={classes.avatar}>
				<Avatar sx={{ width: 100, height: 100 }} />
			</div>
			<div>
				<Typography>Name</Typography>
			</div>
		</div>
	);
}

export default ProfilePanel;
