import React from "react";
import { Typography } from "@mui/material";
import Base from "../components/Base";
import Product from "../components/Product";

function Products() {
	return (
		<Base>
			<Typography variant="h4" sx={{ marginBottom: "30px" }}>
				Products
			</Typography>
			<Product />
			<Product />
			<Product />
		</Base>
	);
}

export default Products;
