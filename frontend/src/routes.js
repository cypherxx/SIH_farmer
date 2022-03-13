import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomThemeContext } from "./Theme/CustomThemeContext";
import { CssBaseline } from "@mui/material";

import Dashboard from "../src/pages/Dashboard";
import Profile from "../src/pages/Profile";
import CropRecommendation from "../src/pages/CropRecommendation";
import FertilizerSuggestion from "../src/pages/FertilizerSuggestion";
import Products from "../src/pages/Products";
import PageNotFound from "../src/pages/PageNotFound";
import FarmingTechniques from "../src/pages/FarmingTechniques";

const RoutesMapping = () => {
	return (
		<CustomThemeContext>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path="/" exact strict element={<Dashboard />} />
					<Route path="/profile" exact strict element={<Profile />} />
					<Route
						path="/crop_recommendation"
						exact
						strict
						element={<CropRecommendation />}
					/>
					<Route
						path="/fertilizer_suggestion"
						exact
						strict
						element={<FertilizerSuggestion />}
					/>
					<Route path="/products" exact strict element={<Products />} />
					<Route
						path="/farming_techniques"
						exact
						strict
						element={<FarmingTechniques />}
					/>
					<Route to="*" exact strict element={<PageNotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</CustomThemeContext>
	);
};

export default RoutesMapping;
