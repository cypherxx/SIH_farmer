import React from "react";

import { Typography, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Base from "../components/Base";

const useStyles = makeStyles(() => ({
	componentContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginTop: "20px",
	},
	button: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: "80px",
	},
}));

function CropRecommendation() {
	const classes = useStyles();
	return (
		<Base>
			<Typography
				variant="h4"
				sx={{ textAlign: "center", marginBottom: "80px" }}
			>
				Find out the most suitable crop to be grown in your farm
			</Typography>
			<div className={classes.componentContainer}>
				<Typography sx={{ width: "150px" }}>Nitrogen</Typography>
				<TextField
					placeholder="Enter value"
					variant="outlined"
					size="small"
					sx={{ marginLeft: "20px" }}
				/>
			</div>
			<div className={classes.componentContainer}>
				<Typography sx={{ width: "150px" }}>Phosphorus</Typography>
				<TextField
					placeholder="Enter value"
					variant="outlined"
					size="small"
					sx={{ marginLeft: "20px" }}
				/>
			</div>
			<div className={classes.componentContainer}>
				<Typography sx={{ width: "150px" }}>Potassium</Typography>
				<TextField
					placeholder="Enter value"
					variant="outlined"
					size="small"
					sx={{ marginLeft: "20px" }}
				/>
			</div>
			<div className={classes.componentContainer}>
				<Typography sx={{ width: "150px" }}>PH Level</Typography>
				<TextField
					placeholder="Enter value"
					variant="outlined"
					size="small"
					sx={{ marginLeft: "20px" }}
				/>
			</div>
			<div className={classes.componentContainer}>
				<Typography sx={{ width: "150px" }}>Rainfall (in mm)</Typography>
				<TextField
					placeholder="Enter value"
					variant="outlined"
					size="small"
					sx={{ marginLeft: "20px" }}
				/>
			</div>
			<div className={classes.button}>
				<Button variant="contained">Predict</Button>
			</div>
		</Base>
	);
}

export default CropRecommendation;
