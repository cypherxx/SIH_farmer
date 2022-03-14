import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
	outerContainer: {
		border: "1px solid #D3D3D3",
		borderRadius: "5px",
		height: "150px",
		marginBottom: "30px",
	},
}));

function CreatePost() {
	const classes = useStyles();
	return <div className={classes.outerContainer}>CreatePost</div>;
}

export default CreatePost;
