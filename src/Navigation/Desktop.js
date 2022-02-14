import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { Link } from "react-scroll";

const PREFIX = "Desktop";

const classes = {
	menuItem: `${PREFIX}-menuItem`,
};

const StyledBox = styled(Box)(({ theme }) => ({
	[`& .${classes.menuItem}`]: {
		marginRight: "1.5rem",
		"&:hover": {
			backgroundColor: "#fff152",
			boxShadow: "0px 0px 10px #B1A739",
			transform: "scale(1.3)",
			fontWeight: "bold",
			transition: "all 0.13s ease-in",
		},
		"&:active": {
			backgroundColor: "transparent",
		},
		"&:visited": {
			backgroundColor: "transparent",
		},
		"&:link": {
			backgroundColor: "none",
		},
		color: "#000000",
		textDecoration: "none",
		cursor: "pointer",
		borderRadius: "0.5rem",
		transition: "all 0.3s ease-out",
		padding: "1rem",
	},
}));

export default function Desktop() {
	return (
		<StyledBox aria-label="desktopMenu" data-testid="desktopMenu">
			<Link
				data-testid="Features"
				to="features"
				spy
				smooth
				data-block="Featuresmenuitemdesktop"
				color="default"
				aria-label="Features"
				className={classes.menuItem}
			>
				<Typography variant="button">Features</Typography>
			</Link>
			<Link
				data-testid="Gallery"
				to="gallery"
				spy
				smooth
				data-block="Gallerymenuitemdesktop"
				color="default"
				aria-label="Gallery"
				className={classes.menuItem}
			>
				<Typography variant="button">Gallery</Typography>
			</Link>
		</StyledBox>
	);
}
