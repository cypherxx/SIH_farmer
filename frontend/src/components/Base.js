import * as React from "react";
import { useLocation } from "react-router-dom";
import {
	Box,
	Drawer,
	AppBar,
	CssBaseline,
	Toolbar,
	Typography,
} from "@mui/material";

import ProfilePanel from "./ProfilePanel";
import Sidebar from "./Sidebar";

const profilePanelWidth = 350;
const menuDrawerWidth = 240;

export default function Base({ children }) {
	let location = useLocation();
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						Gramin Vikas
					</Typography>
				</Toolbar>
			</AppBar>
			{location.pathname === "/" && (
				<Drawer
					variant="permanent"
					sx={{
						width: profilePanelWidth,
						flexShrink: 0,
						[`& .MuiDrawer-paper`]: {
							width: profilePanelWidth,
							boxSizing: "border-box",
						},
					}}
				>
					<Toolbar />
					<Box sx={{ overflow: "auto" }}>
						<ProfilePanel />
					</Box>
				</Drawer>
			)}
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				{children}
			</Box>
			<Drawer
				sx={{
					width: menuDrawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: menuDrawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="permanent"
				anchor="right"
			>
				<Toolbar />
				<Sidebar />
			</Drawer>
		</Box>
	);
}
