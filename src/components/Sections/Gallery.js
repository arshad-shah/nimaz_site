import { Box, Toolbar, Typography, useTheme } from "@mui/material";
import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

function Gallery() {
	const theme = useTheme();
	// array of images from assets/screenshots folder
	const images = [
		{
			src: require("../../assets/screenshots/PrayerTimesPage.png"),
		},
		{ src: require("../../assets/screenshots/TasbeehPage.png") },
		{ src: require("../../assets/screenshots/TasbeehListPage.png") },
		{ src: require("../../assets/screenshots/QiblaCompassPage.png") },
		{ src: require("../../assets/screenshots/namesOfAllahPage.png") },
		{ src: require("../../assets/screenshots/QuranJuzListPage.png") },
		{ src: require("../../assets/screenshots/QuranSurahListPage.png") },
		{
			src: require("../../assets/screenshots/QuranAyaListWithEnglish.png"),
		},
		{ src: require("../../assets/screenshots/QuranAyaListWithUrdu.png") },
	];
	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			p={2}
		>
			<Toolbar id="gallery" />
			<Typography variant="h4" component="h1" gutterBottom>
				Gallery
			</Typography>

			{/* a box centered and padded */}
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					width: "100%",
					maxWidth: "100%",
					height: "100%",
					maxHeight: "100%",
					boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
					borderRadius: "16px",
					[theme.breakpoints.down("sm")]: {
						width: "100%",
						maxWidth: "100%",
						height: "100%",
						maxHeight: "100%",
					},
					[theme.breakpoints.up("md")]: {
						width: "30%",
						maxWidth: "100%",
						height: "50%",
						maxHeight: "100%",
					},
				}}
			>
				{/* a carousel with images */}

				<Carousel
					hasMediaButton={false}
					shouldLazyLoad={true}
					images={images}
					style={{
						height: "100%",
						width: "100%",
						borderRadius: "1rem",
						padding: "1rem",
					}}
				/>
			</Box>
		</Box>
	);
}

export default Gallery;
