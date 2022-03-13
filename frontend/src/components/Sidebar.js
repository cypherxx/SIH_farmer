import React from "react";
import { Link } from "react-router-dom";
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
} from "@mui/material";

import { makeStyles } from "@mui/styles";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";

const useStyles = makeStyles(() => ({
	container: {
		marginTop: "20px",
	},
}));

function Sidebar() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<List>
				<ListItem button sx={{ textAlign: "center" }} component={Link} to="/">
					{/* <ListItemIcon>
						<HomeIcon />
					</ListItemIcon> */}
					<ListItemText primary={"Home"} />
				</ListItem>
				<Divider />
				<ListItem
					button
					sx={{ textAlign: "center" }}
					component={Link}
					to="/profile"
				>
					{/* <ListItemIcon>
						<PersonIcon />
					</ListItemIcon> */}
					<ListItemText primary={"Profile"} />
				</ListItem>
				<Divider />
				<ListItem
					button
					sx={{ textAlign: "center" }}
					component={Link}
					to="/crop_recommendation"
				>
					<ListItemText primary={"Crop Recommendation"} />
				</ListItem>
				<Divider />
				<ListItem
					button
					sx={{ textAlign: "center" }}
					component={Link}
					to="/fertilizer_suggestion"
				>
					<ListItemText primary={"Fertilizer Suggestion"} />
				</ListItem>
				<Divider />
				<ListItem
					button
					sx={{ textAlign: "center" }}
					component={Link}
					to="/products"
				>
					<ListItemText primary={"Products"} />
				</ListItem>
				<Divider />
				<ListItem
					button
					sx={{ textAlign: "center" }}
					component={Link}
					to="/farming_techniques"
				>
					<ListItemText primary={"Farming Techniques"} />
				</ListItem>
			</List>
		</div>
	);
}

export default Sidebar;
