import React, { useState } from "react";
import {
	Typography,
	TextField,
	Button,
	Dialog,
	DialogContent,
	DialogActions,
	DialogTitle,
	DialogContentText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Base from "../components/Base";

import { FertilizerSuggestionAPI } from "../helper/index";

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
	const [predicton, setPrediction] = useState("");
	const [dialogOpen, setDialogOpen] = useState(false);
	const [values, setValues] = useState({
		temp: "",
		humidity: "",
		moisture: "",
		crop_type: "",
		soil_type: "",
		nitrogen: "",
		phosphorus: "",
		potassium: "",
	});
	const {
		temp,
		humidity,
		moisture,
		crop_type,
		soil_type,
		nitrogen,
		phosphorus,
		potassium,
	} = values;
	const handleValueChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};

	const handlePredict = () => {
		FertilizerSuggestionAPI(values).then((res) => {
			console.log(res);
			setPrediction(res);
		});

		handleOpen();
	};
	const handleOpen = () => {
		setDialogOpen(true);
	};
	const handleClose = () => {
		setDialogOpen(false);
	};

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
				<Typography sx={{ width: "150px" }}>Temprature</Typography>
				<TextField
					placeholder="Enter value"
					variant="outlined"
					size="small"
					sx={{ marginLeft: "20px" }}
					value={temp}
					onChange={handleValueChange("temp")}
				/>
			</div>
			<div className={classes.componentContainer}>
				<Typography sx={{ width: "150px" }}>Humidity</Typography>
				<TextField
					placeholder="Enter value"
					variant="outlined"
					size="small"
					sx={{ marginLeft: "20px" }}
					value={humidity}
					onChange={handleValueChange("humidity")}
				/>
			</div>
			<div className={classes.componentContainer}>
				<Typography sx={{ width: "150px" }}>Moisture</Typography>
				<TextField
					placeholder="Enter value"
					variant="outlined"
					size="small"
					sx={{ marginLeft: "20px" }}
					value={moisture}
					onChange={handleValueChange("moisture")}
				/>
			</div>
			<div className={classes.componentContainer}>
				<Typography sx={{ width: "150px" }}>Crop Type</Typography>
				<TextField
					placeholder="Enter value"
					variant="outlined"
					size="small"
					sx={{ marginLeft: "20px" }}
					value={crop_type}
					onChange={handleValueChange("crop_type")}
				/>
			</div>
			<div className={classes.componentContainer}>
				<Typography sx={{ width: "150px" }}>Soil Type</Typography>
				<TextField
					placeholder="Enter value"
					variant="outlined"
					size="small"
					sx={{ marginLeft: "20px" }}
					value={soil_type}
					onChange={handleValueChange("soil_type")}
				/>
			</div>
			<div className={classes.componentContainer}>
				<Typography sx={{ width: "150px" }}>Nitrogen</Typography>
				<TextField
					placeholder="Enter value"
					variant="outlined"
					size="small"
					sx={{ marginLeft: "20px" }}
					value={nitrogen}
					onChange={handleValueChange("nitrogen")}
				/>
			</div>
			<div className={classes.componentContainer}>
				<Typography sx={{ width: "150px" }}>Phosphorus</Typography>
				<TextField
					placeholder="Enter value"
					variant="outlined"
					size="small"
					sx={{ marginLeft: "20px" }}
					value={phosphorus}
					onChange={handleValueChange("phosphorus")}
				/>
			</div>
			<div className={classes.componentContainer}>
				<Typography sx={{ width: "150px" }}>Potassium</Typography>
				<TextField
					placeholder="Enter value"
					variant="outlined"
					size="small"
					sx={{ marginLeft: "20px" }}
					value={potassium}
					onChange={handleValueChange("potassium")}
				/>
			</div>
			<div className={classes.button}>
				<Button variant="contained" onClick={handlePredict}>
					Predict
				</Button>
			</div>
			<Dialog
				open={dialogOpen}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Fertilizer Suggestion"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						{predicton}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>ok</Button>
				</DialogActions>
			</Dialog>
		</Base>
	);
}

export default FertilizerSuggestion;
