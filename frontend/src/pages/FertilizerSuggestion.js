import React from "react";

import {
	Typography,
	TextField,
	Button,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
} from "@mui/material";
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
	selectCrop: {
		marginLeft: "20px",
		width: "150px",
	},
}));

function FertilizerSuggestion() {
	const classes = useStyles();
	return (
		<Base>
			<Typography
				variant="h4"
				sx={{ textAlign: "center", marginBottom: "80px" }}
			>
				Get better suggestion on fertilizers based on soil
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
				<Typography sx={{ width: "170px" }}>Potassium</Typography>
				<TextField
					placeholder="Enter value"
					variant="outlined"
					size="small"
					sx={{ marginLeft: "20px" }}
				/>
			</div>
			<div className={classes.componentContainer}>
				<Typography>Crop you want to grow</Typography>
				<FormControl sx={{ width: "190px", marginLeft: "20px" }}>
					<InputLabel id="demo-simple-select-label">Age</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						//value={age}
						label="Age"
						//onChange={handleChange}
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</div>
			<div className={classes.button}>
				<Button variant="contained">Predict</Button>
			</div>
		</Base>
	);
}

export default FertilizerSuggestion;
