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

import { cropRecommendAPI } from "../helper/index";

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
	const [predicton, setPrediction] = useState("");
	const [dialogOpen, setDialogOpen] = useState(false);
	const [values, setValues] = useState({
		temp: "",
		humidity: "",
		nitrogen: "",
		phosphorus: "",
		potassium: "",
		ph: "",
		rainfall: "",
	});
	const { temp, humidity, nitrogen, phosphorus, potassium, ph, rainfall } =
		values;
	const handleValueChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};
	const handlePredict = () => {
		cropRecommendAPI(values).then((res) => {
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
	return (
		<Base>
			<Typography
				variant="h4"
				sx={{ textAlign: "center", marginBottom: "80px" }}
			>
				Find out the most suitable crop to be grown in your farm
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
			<div className={classes.componentContainer}>
				<Typography sx={{ width: "150px" }}>PH Level</Typography>
				<TextField
					placeholder="Enter value"
					variant="outlined"
					size="small"
					sx={{ marginLeft: "20px" }}
					value={ph}
					onChange={handleValueChange("ph")}
				/>
			</div>
			<div className={classes.componentContainer}>
				<Typography sx={{ width: "150px" }}>Rainfall (in mm)</Typography>
				<TextField
					placeholder="Enter value"
					variant="outlined"
					size="small"
					sx={{ marginLeft: "20px" }}
					value={rainfall}
					onChange={handleValueChange("rainfall")}
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

export default CropRecommendation;
