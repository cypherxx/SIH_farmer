import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

import trolley_pump from "../images/trolley_pump.jpeg";

export default function Product() {
	const theme = useTheme();

	return (
		<Card sx={{ display: "flex", margin: "50px" }}>
			<CardMedia
				component="img"
				sx={{ width: 400, height: 250 }}
				image={trolley_pump}
				alt="Product Image"
			/>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography component="div" variant="h5">
						Product Name
					</Typography>
					<Typography variant="subtitle1" color="text.secondary">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque sed turpis sed mi varius malesuada. Duis vitae dolor
						pretium, blandit purus eu, accumsan dui. Nullam efficitur enim ut
						lobortis condimentum. Phasellus sed facilisis nibh. Etiam mollis,
						dui in feugiat euismod, sem turpis porta arcu, a eleifend nisl ante
						in neque. Nam maximus lectus vitae metus semper mollis. Quisque
						varius egestas erat, id sagittis enim sagittis quis. Quisque
						sollicitudin pellentesque nisi ac euismod. Sed iaculis magna ut
						lorem viverra, in facilisis magna vehicula. Etiam enim leo, auctor
						in turpis egestas, feugiat accumsan turpis. Aliquam ultrices aliquam
						ultricies. Proin aliquet ligula ac auctor maximus. Vivamus ut augue
						feugiat, suscipit velit ac, fermentum metus. Pellentesque cursus
						facilisis faucibus. Nam interdum enim eu sagittis posuere.
						Pellentesque quis felis dui.
					</Typography>
				</CardContent>
			</Box>
		</Card>
	);
}
